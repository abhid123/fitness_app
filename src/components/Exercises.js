import React, {useEffect, useState} from 'react';
import  {Pagination } from '@mui/material';
import  {Box , Stack , Typography} from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';

import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises , setExercises , bodyPart}) => {
  console.log(exercises);
  const [currentPage, setcurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises = exercises.slice(indexOfFirstExercise , indexOfLastExercise);

  const paginate = (e , value )=> {
      setcurrentPage(value);
      window.scrollTo({top:1800 , behavior:'smooth' })

  }
//?offset=0&limit=1300
  useEffect(()=>{
    const fetchExercisesData = async () => {
      let exerciseData = [];

      if(bodyPart === 'all'){
        exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?offset=0&limit=1300', exerciseOptions );
      } else {
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?offset=0&limit=1300`, exerciseOptions );
      }

      setExercises(exerciseData);
    }

    fetchExercisesData();
  },[bodyPart]);


  return (
    <Box id="exercises"
      sx={{mt:{lg:'110px'}}}
      mt="50px"
      p="20px"
    >
      <Typography variant='h3' mb="46px"  >
        Showing Results
      </Typography>

      <Stack  direction="row" 
        sx={{gap:{lg:"110px", xs:'50px'}}}
        flexWrap="wrap"
        justifyContent="center"
      >
      {currentExercises.map((exercise , index) => (
        <ExerciseCard key={index} exercise={exercise}/>
      ))}
      </Stack>

      <Stack mt="100px" alignItems="center" >

        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shap="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length /exercisesPerPage)}
            page={currentPage}
            onChange={ paginate}
            size="large"


          
          />
        )}

      </Stack>

    </Box>
  )
}

export default Exercises