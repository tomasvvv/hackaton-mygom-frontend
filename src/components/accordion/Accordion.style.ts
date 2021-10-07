import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useAccordionStyles = makeStyles((theme) => createStyles({
  accordionWrapper: {
    margin: '0 auto',
    width: '100%',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(1, 4, 1, 1),
  },
  summary: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: theme.spacing(0.5, 1),
  },
}));
