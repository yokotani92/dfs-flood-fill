import { Box, Paper, Grid, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { RootState } from '../../utils/store';
import { ConditionState } from './conditionSlice';
import { SizeContext } from '../../component/App';

const Evaluation: React.FC = () => {
  const condition = useSelector<RootState, ConditionState>(
    (state) => state.condition
  );
  const { isMobile } = useContext(SizeContext);

  let comment;
  switch (condition.eval) {
    case 'BEFORE':
      comment = '実行前です。';
      break;
    case 'INPROCESS':
      comment = '魚屋にたどり着けるでしょうか？。';
      break;
    case 'REACHABLE':
      comment = '魚屋にたどり着けました！';
      break;
    case 'UNREACHABLE':
      comment = '魚屋にたどり着けませんでした！';
      break;
    default:
      comment = '';
  }

  return (
    <Paper>
      <Box p={isMobile ? 2 : 3}>
        <Grid container spacing={2}>
          <Grid item xl={1} sm={1} xs={2} container alignItems="center">
            <InfoOutlinedIcon />
          </Grid>
          <Grid item xl={11} sm={11} xs={10} container alignItems="center">
            <Typography variant="body1">{comment}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Evaluation;
