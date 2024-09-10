import React from 'react';
import { Box , Stack , Typography } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({equipmentExercises , targetMuscleExercises }) => {
  return (
    <Box sx={{mt:{lg:'100px',xs:'0'}}} >
      <Typography variant='h3' mb={5} textTransform="capitalize">
        Exercises that  Target the same muscle group
      </Typography>
      <Stack direction='row' sx={{p:'2', position:'relative'}}  >
        {targetMuscleExercises.length ?
         <HorizontalScrollbar data={targetMuscleExercises} />:<Loader /> }

      </Stack>

      <Typography variant='h3' mb={5} textTransform="capitalize">
        Exercises that  Use the same equipments
      </Typography>
      <Stack direction='row' sx={{p:'2', position:'relative'}}  >
        {equipmentExercises.length ?
         <HorizontalScrollbar data={equipmentExercises} />:<Loader /> }

      </Stack>
    </Box>
  )
}

export default SimilarExercises