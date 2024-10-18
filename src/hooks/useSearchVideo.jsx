import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const useSearchVideo = (mealData) => {

  const [video, setVideo] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      console.log("Meal Data From Custom Hook", mealData);
      if(mealData){
      try {
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`, {
          params: {
            part: 'snippet',
            type: 'video',
            maxResults: 1,
            q: mealData,
          },
        });
        setVideo(response.data.items);
        console.log('Videos:', response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };
  }

    fetchData();
  }, [mealData]);

  return { video };

}
export default useSearchVideo;