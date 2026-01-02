
'use client'

import { useState, useEffect } from 'react'
import './job-portal-test.css'


interface CustomField {
  name: string
  label: string
  type: string
  placeholder: string
  id: string
}

export default function DummyJobPortalPage() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    // Initialize theme from localStorage on first render (client-side only)
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('jobPortalTheme') as 'dark' | 'light'
      return savedTheme || 'light'
    }
    return 'light'
  })
  const [customFields, setCustomFields] = useState<CustomField[]>([])
  const [customFieldCounter, setCustomFieldCounter] = useState(0)
  const [experienceCounter, setExperienceCounter] = useState(0)
  const [showCustomFieldCreator, setShowCustomFieldCreator] = useState(false)
  const [customFieldForm, setCustomFieldForm] = useState({
    name: '',
    label: '',
    type: 'text',
    placeholder: ''
  })

  // Field visibility states
  const [fieldVisibility, setFieldVisibility] = useState<Record<string, boolean>>({
    firstName: true,
    lastName: true,
    fullName: false,
    email: true,
    phone: true,
    address: true,
    city: true,
    state: true,
    zipCode: true,
    country: true,
    linkedin: false,
    github: false,
    portfolio: false,
    currentLocation: false,
    willingToRelocate: false,
    totalExperience: false,
    noticePeriod: false,
    currentSalary: false,
    expectedSalary: false,
    experience: false,
    salary: false,
    coverLetter: false,
    availability: false
  })

  // Set theme attribute on mount
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  // Initialize default fields and experience card
  useEffect(() => {
    const defaultFields = ['firstName', 'lastName', 'fullName', 'email', 'phone', 'linkedin', 'github', 'portfolio', 'totalExperience', 'currentSalary', 'expectedSalary', 'currentLocation']
    const newVisibility = { ...fieldVisibility }
    defaultFields.forEach(field => {
      newVisibility[field] = true
    })
    setFieldVisibility(newVisibility)

    // Add first experience card
    setExperienceCounter(1)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('jobPortalTheme', newTheme)
  }

  const toggleField = (fieldName: string) => {
    setFieldVisibility(prev => ({
      ...prev,
      [fieldName]: !prev[fieldName]
    }))
  }

  const handleCustomFieldFormChange = (field: string, value: string) => {
    setCustomFieldForm(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const createCustomField = () => {
    const { name, label, type, placeholder } = customFieldForm

    if (!name || !label) {
      alert('Please enter both field name and label')
      return
    }

    if (customFields.find(field => field.name === name) || fieldVisibility.hasOwnProperty(name)) {
      alert('Field name already exists')
      return
    }

    const newCounter = customFieldCounter + 1
    const customField: CustomField = {
      name,
      label,
      type,
      placeholder,
      id: `custom-${newCounter}`
    }

    setCustomFields(prev => [...prev, customField])
    setCustomFieldCounter(newCounter)
    setFieldVisibility(prev => ({
      ...prev,
      [name]: true
    }))

    // Reset form
    setCustomFieldForm({
      name: '',
      label: '',
      type: 'text',
      placeholder: ''
    })
    setShowCustomFieldCreator(false)
  }

  const deleteCustomField = (fieldName: string) => {
    if (!confirm(`Delete field "${fieldName}"?`)) return

    setCustomFields(prev => prev.filter(field => field.name !== fieldName))
    setFieldVisibility(prev => {
      const newVisibility = { ...prev }
      delete newVisibility[fieldName]
      return newVisibility
    })
  }

  const addExperienceCard = () => {
    setExperienceCounter(prev => prev + 1)
  }

  const removeExperienceCard = (cardId: number) => {
    if (confirm('Are you sure you want to remove this experience?')) {
      // In React, we'll handle this differently - remove from a list
      const cardElement = document.getElementById(`experience-card-${cardId}`)
      if (cardElement) {
        cardElement.remove()
      }
    }
  }

  const toggleEndDate = (cardId: number) => {
    const checkbox = document.getElementById(`currentlyWorking_${cardId}`) as HTMLInputElement
    const endDateInput = document.getElementById(`endDate_${cardId}`) as HTMLInputElement

    if (checkbox && endDateInput) {
      if (checkbox.checked) {
        endDateInput.disabled = true
        endDateInput.value = ''
      } else {
        endDateInput.disabled = false
      }
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const data: Record<string, any> = {}

    for (let [key, value] of formData.entries()) {
      data[key] = value
    }

    // Collect experience data
    const experiences = []
    for (let i = 1; i <= experienceCounter; i++) {
      const cardElement = document.getElementById(`experience-card-${i}`)
      if (cardElement) {
        experiences.push({
          jobTitle: (document.getElementById(`jobTitle_${i}`) as HTMLInputElement)?.value,
          companyName: (document.getElementById(`companyName_${i}`) as HTMLInputElement)?.value,
          jobLocation: (document.getElementById(`jobLocation_${i}`) as HTMLInputElement)?.value,
          startDate: (document.getElementById(`startDate_${i}`) as HTMLInputElement)?.value,
          endDate: (document.getElementById(`endDate_${i}`) as HTMLInputElement)?.value,
          currentlyWorking: (document.getElementById(`currentlyWorking_${i}`) as HTMLInputElement)?.checked,
          jobDescription: (document.getElementById(`jobDescription_${i}`) as HTMLTextAreaElement)?.value
        })
      }
    }

    data.experiences = experiences

    console.log('Form submitted with data:', data)
    console.log('Experience entries:', experiences)
    alert(`Application submitted successfully! Found ${experiences.length} experience entries. Check the console for detailed form data.`)
  }

  const renderExperienceCard = (cardId: number) => (
    <div className="experience-card" id={`experience-card-${cardId}`} key={cardId}>
      <div className="experience-card-header">
        <h5 className="experience-card-title">Experience #{cardId}</h5>
        <button type="button" className="remove-experience-btn" onClick={() => removeExperienceCard(cardId)}>
          Remove
        </button>
      </div>

      <div className="experience-form-row">
        <div className="experience-form-group">
          <label htmlFor={`jobTitle_${cardId}`}>Job Title</label>
          <input type="text" id={`jobTitle_${cardId}`} name={`jobTitle_${cardId}`} placeholder="e.g., Software Engineer" />
        </div>
        <div className="experience-form-group">
          <label htmlFor={`companyName_${cardId}`}>Company Name</label>
          <input type="text" id={`companyName_${cardId}`} name={`companyName_${cardId}`} placeholder="e.g., Tech Corp Inc." />
        </div>
      </div>

      <div className="experience-form-row">
        <div className="experience-form-group">
          <label htmlFor={`jobLocation_${cardId}`}>Location</label>
          <input type="text" id={`jobLocation_${cardId}`} name={`jobLocation_${cardId}`} placeholder="e.g., San Francisco, CA" />
        </div>
      </div>

      <div className="experience-form-row">
        <div className="experience-form-group">
          <label htmlFor={`startDate_${cardId}`}>Start Date</label>
          <input type="month" id={`startDate_${cardId}`} name={`startDate_${cardId}`} />
        </div>
        <div className="experience-form-group">
          <label htmlFor={`endDate_${cardId}`}>End Date</label>
          <input type="month" id={`endDate_${cardId}`} name={`endDate_${cardId}`} />
        </div>
      </div>

      <div className="experience-checkbox-group">
        <input
          type="checkbox"
          id={`currentlyWorking_${cardId}`}
          name={`currentlyWorking_${cardId}`}
          onChange={() => toggleEndDate(cardId)}
        />
        <label htmlFor={`currentlyWorking_${cardId}`}>Currently working here</label>
      </div>

      <div className="experience-form-row" style={{ marginTop: '15px' }}>
        <div className="experience-form-group">
          <label htmlFor={`jobDescription_${cardId}`}>Job Description</label>
          <textarea
            id={`jobDescription_${cardId}`}
            name={`jobDescription_${cardId}`}
            placeholder="Describe your key responsibilities, achievements, and technologies used..."
          />
        </div>
      </div>
    </div>
  )

  return (
    <div className="container">
      {/* Sidebar Controls */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>🛠️ Field Controls</h2>
          <label className="theme-toggle" title="Toggle Dark/Light Mode">
            <input type="checkbox" checked={theme === 'light'} onChange={toggleTheme} />
            <span className="toggle-track">
              <span className="toggle-icon moon">🌙</span>
              <span className="toggle-icon sun">☀️</span>
              <span className="toggle-thumb"></span>
            </span>
          </label>
        </div>

        {/* Personal Information Toggles */}
        {Object.entries({
          firstName: 'First Name',
          lastName: 'Last Name',
          fullName: 'Full Name',
          email: 'Email',
          phone: 'Phone',
          address: 'Address',
          city: 'City',
          state: 'State',
          zipCode: 'ZIP Code',
          country: 'Country',
          linkedin: 'LinkedIn URL',
          github: 'GitHub URL',
          portfolio: 'Portfolio URL',
          currentLocation: 'Current Location',
          willingToRelocate: 'Willing to Relocate',
          totalExperience: 'Total Experience',
          noticePeriod: 'Notice Period',
          currentSalary: 'Current Salary',
          expectedSalary: 'Expected Salary',
          experience: 'Experience',
          salary: 'Salary Expectation',
          coverLetter: 'Cover Letter',
          availability: 'Availability'
        }).map(([key, label]) => (
          <div className="field-toggle" key={key}>
            <label htmlFor={`toggle-${key}`}>{label}</label>
            <div className="toggle-switch">
              <input
                type="checkbox"
                id={`toggle-${key}`}
                checked={fieldVisibility[key] || false}
                onChange={() => toggleField(key)}
              />
              <span className="slider"></span>
            </div>
          </div>
        ))}

        {/* Custom Fields Section */}
        <div className="custom-field-section">
          <h3 style={{ marginBottom: '15px', fontSize: '16px' }}>➕ Custom Fields</h3>

          <button className="add-field-btn" onClick={() => setShowCustomFieldCreator(true)}>
            + Add Custom Field
          </button>

          {showCustomFieldCreator && (
            <div id="custom-field-creator">
              <input
                type="text"
                value={customFieldForm.name}
                onChange={(e) => handleCustomFieldFormChange('name', e.target.value)}
                className="custom-field-input"
                placeholder="Field Name (e.g., github)"
              />
              <input
                type="text"
                value={customFieldForm.label}
                onChange={(e) => handleCustomFieldFormChange('label', e.target.value)}
                className="custom-field-input"
                placeholder="Display Label (e.g., GitHub Profile)"
              />
              <select
                value={customFieldForm.type}
                onChange={(e) => handleCustomFieldFormChange('type', e.target.value)}
                className="field-type-select"
              >
                <option value="text">Text Input</option>
                <option value="email">Email Input</option>
                <option value="url">URL Input</option>
                <option value="tel">Phone Input</option>
                <option value="number">Number Input</option>
                <option value="date">Date Input</option>
                <option value="textarea">Text Area</option>
                <option value="select">Dropdown Select</option>
              </select>
              <input
                type="text"
                value={customFieldForm.placeholder}
                onChange={(e) => handleCustomFieldFormChange('placeholder', e.target.value)}
                className="custom-field-input"
                placeholder="Placeholder text (optional)"
              />
              <button className="create-field-btn" onClick={createCustomField}>
                Create Field
              </button>
              <button
                className="create-field-btn"
                onClick={() => setShowCustomFieldCreator(false)}
                style={{ background: '#95a5a6' }}
              >
                Cancel
              </button>
            </div>
          )}

          <div id="custom-fields-list">
            {customFields.map((field) => (
              <div className="field-toggle custom-field-toggle" key={field.name} id={`toggle-container-${field.name}`}>
                <label htmlFor={`toggle-${field.name}`}>{field.label}</label>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div className="toggle-switch">
                    <input
                      type="checkbox"
                      id={`toggle-${field.name}`}
                      checked={fieldVisibility[field.name] || false}
                      onChange={() => toggleField(field.name)}
                    />
                    <span className="slider"></span>
                  </div>
                  <button className="delete-field-btn" onClick={() => deleteCustomField(field.name)}>
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Application Form */}
      <div className="main-content">
        {/* Info Button */}
        <div className="info-button">
          <span className="info-icon">i</span>
          <div className="info-tooltip">
            This dummy job portal is for testing the Auto-Fill Extension.<br />
            <a href="https://github.com/neerajdhurandher/auto-Fill-Extension" className="install-link" target="_blank" rel="noopener noreferrer">
              Install Extension
            </a> to get started.
          </div>
        </div>

        <h1>Dummy Job Portal</h1>
        <p className="job-title">Apply for : Senior Software Developer</p>

        <form id="jobApplicationForm" onSubmit={handleSubmit}>
          {/* Personal Information Section */}
          <div className="form-section">
            <h3>📋 Personal Information</h3>

            <div className="form-row">
              <div className={`form-group ${fieldVisibility.firstName ? 'visible' : ''}`} id="field-firstName">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" placeholder="Your first name" />
              </div>
              <div className={`form-group ${fieldVisibility.lastName ? 'visible' : ''}`} id="field-lastName">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" placeholder="Your last name" />
              </div>
            </div>

            <div className="form-row">
              <div className={`form-group ${fieldVisibility.fullName ? 'visible' : ''}`} id="field-fullName">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" placeholder="Your full name" />
              </div>
            </div>

            <div className="form-row">
              <div className={`form-group ${fieldVisibility.email ? 'visible' : ''}`} id="field-email">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="your.email@example.com" />
              </div>
              <div className={`form-group ${fieldVisibility.phone ? 'visible' : ''}`} id="field-phone">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="+1 (555) 123-4567" />
              </div>
            </div>
          </div>

          {/* Address Information Section */}
          <div className="form-section">
            <h3>🏠 Address Information</h3>

            <div className="form-row">
              <div className={`form-group ${fieldVisibility.address ? 'visible' : ''}`} id="field-address">
                <label htmlFor="address">Street Address</label>
                <input type="text" id="address" name="address" placeholder="123 Main Street" />
              </div>
            </div>

            <div className="form-row">
              <div className={`form-group ${fieldVisibility.city ? 'visible' : ''}`} id="field-city">
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" placeholder="San Francisco" />
              </div>
              <div className={`form-group ${fieldVisibility.state ? 'visible' : ''}`} id="field-state">
                <label htmlFor="state">State/Province</label>
                <select id="state" name="state">
                  <option value="">Select State</option>
                  <option value="CA">California</option>
                  <option value="NY">New York</option>
                  <option value="TX">Texas</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className={`form-group ${fieldVisibility.zipCode ? 'visible' : ''}`} id="field-zipCode">
                <label htmlFor="zipCode">ZIP Code</label>
                <input type="text" id="zipCode" name="zipCode" placeholder="94102" />
              </div>
              <div className={`form-group ${fieldVisibility.country ? 'visible' : ''}`} id="field-country">
                <label htmlFor="country">Country</label>
                <select id="country" name="country">
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className={`form-group ${fieldVisibility.currentLocation ? 'visible' : ''}`} id="field-currentLocation">
                <label htmlFor="currentLocation">Current Location</label>
                <input type="text" id="currentLocation" name="currentLocation" placeholder="City, State" />
              </div>
              <div className={`form-group ${fieldVisibility.willingToRelocate ? 'visible' : ''}`} id="field-willingToRelocate">
                <label htmlFor="willingToRelocate">Willing to Relocate?</label>
                <select id="willingToRelocate" name="willingToRelocate">
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
          </div>

          {/* Professional Information Section */}
          <div className="form-section">
            <h3>💼 Professional Information</h3>

            <div className="form-row">
              <div className={`form-group ${fieldVisibility.linkedin ? 'visible' : ''}`} id="field-linkedin">
                <label htmlFor="linkedin">LinkedIn Profile</label>
                <input type="url" id="linkedin" name="linkedin" placeholder="https://linkedin.com/in/yourprofile" />
              </div>
              <div className={`form-group ${fieldVisibility.github ? 'visible' : ''}`} id="field-github">
                <label htmlFor="github">GitHub Profile</label>
                <input type="url" id="github" name="github" placeholder="https://github.com/yourusername" />
              </div>
            </div>

            <div className="form-row">
              <div className={`form-group ${fieldVisibility.portfolio ? 'visible' : ''}`} id="field-portfolio">
                <label htmlFor="portfolio">Portfolio Website</label>
                <input type="url" id="portfolio" name="portfolio" placeholder="https://yourportfolio.com" />
              </div>
              <div className={`form-group ${fieldVisibility.totalExperience ? 'visible' : ''}`} id="field-totalExperience">
                <label htmlFor="totalExperience">Total Years of Experience</label>
                <input type="number" id="totalExperience" name="totalExperience" placeholder="5" min="0" />
              </div>
            </div>

            <div className="form-row">
              <div className={`form-group ${fieldVisibility.noticePeriod ? 'visible' : ''}`} id="field-noticePeriod">
                <label htmlFor="noticePeriod">Notice Period</label>
                <select id="noticePeriod" name="noticePeriod">
                  <option value="">Select</option>
                  <option value="immediate">Immediate</option>
                  <option value="2weeks">2 Weeks</option>
                  <option value="1month">1 Month</option>
                  <option value="2months">2 Months</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className={`form-group ${fieldVisibility.currentSalary ? 'visible' : ''}`} id="field-currentSalary">
                <label htmlFor="currentSalary">Current Salary</label>
                <input type="number" id="currentSalary" name="currentSalary" placeholder="80000" />
              </div>
              <div className={`form-group ${fieldVisibility.expectedSalary ? 'visible' : ''}`} id="field-expectedSalary">
                <label htmlFor="expectedSalary">Expected Salary</label>
                <input type="number" id="expectedSalary" name="expectedSalary" placeholder="100000" />
              </div>
            </div>

            {/* Job Experience Sub-section */}
            <div className="job-experience-section" style={{ marginTop: '30px', paddingTop: '20px', borderTop: '2px solid var(--border-color)' }}>
              <h4 style={{ marginBottom: '15px', fontSize: '15px' }}>💼 Work Experience</h4>
              <div id="experience-cards-container">
                {Array.from({ length: experienceCounter }, (_, i) => renderExperienceCard(i + 1))}
              </div>
              <button type="button" className="add-experience-btn" onClick={addExperienceCard}>
                + Add Another Experience
              </button>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="form-section">
            <h3>📝 Additional Information</h3>

            <div className="form-row">
              <div className={`form-group ${fieldVisibility.coverLetter ? 'visible' : ''}`} id="field-coverLetter">
                <label htmlFor="coverLetter">Cover Letter</label>
                <textarea id="coverLetter" name="coverLetter" placeholder="Tell us why you're interested in this position..."></textarea>
              </div>
            </div>

            <div className="form-row">
              <div className={`form-group ${fieldVisibility.availability ? 'visible' : ''}`} id="field-availability">
                <label htmlFor="availability">Availability to Start</label>
                <select id="availability" name="availability">
                  <option value="">Select</option>
                  <option value="immediate">Immediate</option>
                  <option value="2weeks">Within 2 Weeks</option>
                  <option value="1month">Within 1 Month</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div className="checkbox-group">
              <input type="checkbox" id="terms" name="terms" />
              <label htmlFor="terms">I agree to the terms and conditions</label>
            </div>

            <div className="checkbox-group">
              <input type="checkbox" id="newsletter" name="newsletter" />
              <label htmlFor="newsletter">Subscribe to job alerts</label>
            </div>
          </div>

          {/* Custom Fields Section */}
          {customFields.length > 0 && (
            <div className="form-section" id="custom-fields-section">
              <h3>🔧 Custom Fields</h3>
              <div id="custom-form-fields">
                {customFields.map((field) => (
                  <div className="form-row" key={field.name}>
                    <div className={`form-group ${fieldVisibility[field.name] ? 'visible' : ''}`} id={`field-${field.name}`}>
                      <label htmlFor={field.name}>
                        {field.label} <span className="field-indicator">({field.name})</span>
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea id={field.name} name={field.name} placeholder={field.placeholder} />
                      ) : (
                        <input type={field.type} id={field.name} name={field.name} placeholder={field.placeholder} />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button type="submit" className="submit-btn">
            🚀 Submit Application
          </button>
        </form>

        <div className="text-center mt-8">
          <a href="/auto-fill-extension-website" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}

