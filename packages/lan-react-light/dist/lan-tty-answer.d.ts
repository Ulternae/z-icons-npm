import React from 'react';

export interface LanTtyAnswerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTtyAnswer(props: LanTtyAnswerProps): React.ReactElement;
export default LanTtyAnswer;
