# React + Vite Project
_Last Updated: 10.18.24_

## How to Start this Project

### Step 1: Clone the Repository

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Create an Environment File

```bash
touch .env
```


### Step 4: Firebase Setup

1. Go to the [Firebase Console](https://console.firebase.google.com/), log in, and create a new project for the web.
2. Add a web app to your Firebase project.
3. Go to Project Settings and retrieve the API key, Auth domain, etc.
4. Copy the configuration into the `.env` file.

### Step 5: Google Auth Setup

1. Go to the [Google Developer Console](https://console.developers.google.com/), create a new project, and navigate to the **OAuth Consent Screen**. Set up the consent screen by providing the necessary information.
2. After setting up the consent screen, go to the **Credentials** section and create OAuth 2.0 credentials. Copy the generated Client ID and add it to your `.env` file as follows:

    ```env
    VITE_GOOGLE_CLIENT_ID=your_google_client_id
    ```

### Step 6: Gemini Setup

1. Visit [Gemini API](https://aistudio.google.com/) and create an API Key.
2. Add your Gemini API key to the `.env` file:

    ```env
    VITE_GEMINI_API_KEY=your_gemini_api_key
    ```

### Step 7: YouTube API Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Navigate to the **Library** section.
3. Search for "YouTube Data API v3" and enable it.
4. Once enabled, go to the **Credentials** section.
5. Click on **Create Credentials** and select **API key**.
6. Copy the generated API key and store it securely.
7. Add your API key to the `.env` file:

    ```env
    VITE_YOUTUBE_API_KEY=your_api_key_here
    ```

8. In your React components, you can access the API key using `process.env.VITE_YOUTUBE_API_KEY`.

### Step 8: Store Your API Keys and Other Credentials

Add the following to your `.env` file:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

This setup allows you to securely use various APIs in your React application.
