import React from 'react';

export interface LanTtyAnswerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTtyAnswer: React.FC<LanTtyAnswerProps>;
export default LanTtyAnswer;
