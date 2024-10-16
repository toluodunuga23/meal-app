# React + Vite Project
Last Updated 10.16.23

## How to Start this Project

### Step 1: Clone the Repository

```bash
git clone <your-repo-url>
cd <your-project-folder>
```


### Step 2: Install Dependencies
npm install

### Step 3: Create an env file
touch .env

### Step 4: Store Your API Keys and other Credentials
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_GOOGLE_CLIENT_ID=your_google_client_id


### Step 5: Firebase Setup
a. Go to Firebase Console, log in, and create a new project for the web.

b. Add a web app to your Firebase project 

c. Go to Project Settings and retrieve apikey, authodomain,etc,
and copy the configuration (API key, Auth domain, etc.). into the env


### Step 6: Google Auth Set up
a. Go to Google Developer Console, create a project, and go to OAuth Consent Screen and set up. 


b. Create OAuth 2.0 credentials and copy the Client ID into your .env file (VITE_GOOGLE_CLIENT_ID).


### Step 7: Gemini Set Up
Visit Gemini API at https://aistudio.google.com/ and create an API Key
Add your Gemini API key to the .env file (VITE_GEMINI_API_KEY).