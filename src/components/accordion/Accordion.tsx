import * as React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import { IAccordion, IAccordionDetail } from '../../constants/types';
import { useAccordionStyles } from './Accordion.style';

interface IProps {
  accordionData: Array<IAccordion>;
}

const SimpleAccordion: React.FC<IProps> = ({ accordionData }): JSX.Element => {
  const classes = useAccordionStyles();
  return (
    <div className={classes.accordionWrapper}>
      {accordionData.map((accordion: IAccordion) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className={classes.summary}>
              <Typography>{accordion.summary.title}</Typography>
              <Typography>
                {accordion.summary.spaces.free}
                /
                {accordion.summary.spaces.total}
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            {accordion.details.map((detail: IAccordionDetail) => (
              <div className={classes.details}>
                <div className={classes.center}>
                  {detail.isReserved ? <CheckCircleIcon /> : <CircleOutlinedIcon />}
                  <Typography ml="0.5rem">
                    {detail.title}
                  </Typography>

                </div>
                <Typography>{detail.employer}</Typography>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default SimpleAccordion;
