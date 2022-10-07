import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const Showcase = styled.div`
  display: flex;
`;

const CalendarWrapper = styled.div<{ open?: boolean }>`
`;

export interface DateRangeSelectorProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  minDate?: Date|String;
  maxDate?: Date|String;
};

export const DateRangeSelector = ({}: DateRangeSelectorProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Wrapper>
      <Showcase>
        <input />
        <span> ~ </span>
        <input />
      </Showcase>

      <CalendarWrapper open={open}>
      </CalendarWrapper>
      
    </Wrapper>
  );
};

export default DateRangeSelector;
