# Laxmi Narayani Pandey Public School Website

A complete, professional school website built with Flask backend and HTML/CSS/JavaScript frontend. This is a fully functional school management website with admission forms, fee structures, facilities information, and more.

## 📋 Project Overview

This website is designed for **Laxmi Narayani Pandey Public School** with the following features:

- **Home Page**: Hero section with school introduction
- **About Page**: School mission, vision, and core values
- **Facilities Page**: Display of school facilities as cards
- **Classes Page**: Information about classes from Nursery to Class 8
- **Fee Structure Page**: Complete fee table and fee calculator
- **Admission Page**: Admission form with validation and database storage
- **Contact Page**: Contact information and contact form
- **Responsive Design**: Mobile-friendly design for all devices
- **Database**: SQLite database to store admission form submissions

## 🎨 Design Features

- **Color Theme**: Blue, White, and Yellow (professional school colors)
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean cards, tables, and button styles
- **Form Validation**: Client-side form validation with error messages
- **Mobile Menu**: Hamburger menu for mobile navigation

## 📁 Project Structure

```
school_website/
├── app.py                    # Flask application
├── requirements.txt          # Python dependencies
├── school.db                 # SQLite database (auto-created)
├── README.md                 # This file
│
├── templates/                # HTML templates
│   ├── base.html            # Base template with navbar and footer
│   ├── index.html           # Home page
│   ├── about.html           # About page
│   ├── facilities.html      # Facilities page
│   ├── classes.html         # Classes page
│   ├── fees.html            # Fee structure page
│   ├── admission.html       # Admission form page
│   ├── admission_success.html # Success page after submission
│   ├── contact.html         # Contact page
│   ├── 404.html             # 404 error page
│   └── 500.html             # 500 error page
│
└── static/                   # Static files
    ├── css/
    │   └── style.css        # Complete CSS stylesheet
    ├── js/
    │   └── script.js        # JavaScript for interactivity
    └── images/              # Image folder (for future use)
```

## 🚀 How to Run the Project

### Prerequisites

- Python 3.7 or higher
- pip (Python package manager)
- Git (optional)

### Step 1: Setup Python Environment

#### On Windows:
```bash
# Create a virtual environment
python -m venv venv

# Activate virtual environment
venv\Scripts\activate
```

#### On macOS/Linux:
```bash
# Create a virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate
```

### Step 2: Install Dependencies

```bash
# Install required packages
pip install -r requirements.txt
```

### Step 3: Run the Application

```bash
# Start the Flask server
python app.py
```

The website will be accessible at: **http://localhost:5000**

### Step 4: Access the Website

Open your web browser and navigate to:
- **Home**: http://localhost:5000/
- **About**: http://localhost:5000/about
- **Facilities**: http://localhost:5000/facilities
- **Classes**: http://localhost:5000/classes
- **Fees**: http://localhost:5000/fees
- **Admission**: http://localhost:5000/admission
- **Contact**: http://localhost:5000/contact

## 💾 Database

The application uses SQLite database to store admission form submissions.

### Database Schema

**admissions table:**
- `id` (Integer, Primary Key)
- `student_name` (String, Required)
- `father_name` (String, Required)
- `class_name` (String, Required)
- `phone_number` (String, Required)
- `address` (String, Required)
- `submitted_at` (DateTime, Auto-set)

The database is automatically created when you first run the application.

## 📝 Customization

### Update School Details

Edit the following files to customize school information:

1. **app.py**: 
   - Port number (default: 5000)
   - Database configuration

2. **templates/base.html**:
   - School name
   - Navigation menu items
   - Footer information
   - Contact details

3. **templates/index.html**:
   - School address
   - Welcome message
   - U-DISE code
   - Session information

4. **templates/contact.html**:
   - Phone number (search for "XXXXXXXXXX")
   - Email address
   - Office hours
   - Google Map embed (replace placeholder)

5. **static/css/style.css**:
   - Color theme (CSS variables at the top)
   - Font sizes
   - Spacing and layout

### Add Your Logo

1. Place your logo image in `static/images/` folder
2. Update `templates/base.html` to add the logo HTML
3. Add CSS styling for the logo in `static/css/style.css`

### Change Color Theme

Edit the color variables in `static/css/style.css`:

```css
:root {
    --primary-blue: #003D82;      /* Main color */
    --light-blue: #0066CC;         /* Light accent */
    --accent-yellow: #FFD700;      /* Highlight color */
    --dark-gray: #333333;
    --light-gray: #F5F5F5;
    --white: #FFFFFF;
}
```

## 🔧 Features & Functionality

### 1. Responsive Design
- Mobile-first approach
- Hamburger menu for mobile devices
- Grid-based layout that adapts to screen size

### 2. Form Validation
- Client-side validation with error messages
- Real-time error clearing
- Phone number format validation (10 digits)
- Email validation
- Minimum length validation

### 3. Database Integration
- SQLAlchemy ORM for database operations
- Automatic database creation
- Admission data storage

### 4. Error Handling
- 404 page for not found errors
- 500 page for server errors
- Form submission error handling

### 5. User Experience
- Smooth scrolling
- Scroll animations
- Sticky navigation bar
- Interactive buttons with hover effects
- Professional typography

## 📱 Browser Compatibility

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (Chrome, Safari)

## 🔒 Security Notes

### Current Implementation:
1. Form validation on client-side
2. Basic error handling
3. Database auto-creation on first run

### For Production Deployment:

Before deploying to production, implement:

1. **CSRF Protection**: Add Flask-WTF for CSRF tokens
2. **Input Sanitization**: Validate and sanitize all inputs on server-side
3. **SQL Injection Prevention**: Use parameterized queries (already done with SQLAlchemy)
4. **Rate Limiting**: Add rate limiting to admission form
5. **HTTPS**: Use SSL/TLS certificates
6. **Environment Variables**: Store sensitive data in environment variables
7. **Admin Panel**: Add authentication for admin access to submissions
8. **Email Verification**: Verify email addresses before storing
9. **Data Privacy**: Add privacy policy and data protection measures
10. **Logging**: Implement proper error logging

Example of adding CSRF protection:

```python
from flask_wtf.csrf import CSRFProtect

csrf = CSRFProtect(app)
```

## 🚀 Deployment

### Deploy on Heroku:

```bash
# Create Heroku app
heroku create your-school-name

# Add Procfile
echo "web: gunicorn app:app" > Procfile

# Install gunicorn
pip install gunicorn

# Deploy
git push heroku main
```

### Deploy on PythonAnywhere:

1. Create account on pythonanywhere.com
2. Upload files
3. Configure WSGI file
4. Reload web app

### Deploy on AWS/DigitalOcean:

1. Set up Linux server
2. Install Python and pip
3. Clone repository
4. Install requirements
5. Use Gunicorn and Nginx as reverse proxy

## 📊 Statistics & Info

- **School Name**: Laxmi Narayani Pandey Public School
- **Address**: Vill.-Post- Belhi, Marouna, Dist.- Supaul, Bihar
- **U-DISE Code**: 10060400106
- **Classes**: Nursery to Class 8th
- **Academic Session**: 2025–2026

## 📧 Support & Maintenance

### Regular Maintenance Tasks:

1. **Database Backup**: Regularly backup the school.db file
2. **Updates**: Keep Flask and dependencies updated
3. **Security**: Monitor for security updates
4. **Content Updates**: Update school information as needed
5. **Monitoring**: Monitor for errors and performance issues

## 📄 License

This project is created for educational purposes for Laxmi Narayani Pandey Public School.

## 🤝 Contributing

To contribute to this project:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Change port in app.py from 5000 to 5001
app.run(debug=True, host='localhost', port=5001)
```

### Database Issues
```bash
# Delete the school.db file and restart the app to recreate it
rm school.db
python app.py
```

### Import Errors
```bash
# Make sure virtual environment is activated and all requirements are installed
pip install -r requirements.txt
```

### Form Not Submitting
- Check browser console for JavaScript errors
- Verify all form field IDs match the validation script
- Ensure database is writable

## 📚 Additional Resources

- [Flask Documentation](https://flask.palletsprojects.com/)
- [SQLAlchemy Documentation](https://docs.sqlalchemy.org/)
- [HTML/CSS Reference](https://developer.mozilla.org/)
- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)

## ✨ Features Highlights

✅ Complete school website  
✅ Responsive design  
✅ Admission form with database storage  
✅ Fee calculator  
✅ Facilities showcase  
✅ Contact form  
✅ Form validation  
✅ Mobile-friendly menu  
✅ Professional UI/UX  
✅ Easy to customize  
✅ Production-ready code  
✅ Well-documented  

## 🎉 Get Started Now!

Follow the setup instructions above to get your school website up and running in minutes!

For questions or improvements, please contact the development team.

---

**Last Updated**: May 2026  
**Version**: 1.0.0
