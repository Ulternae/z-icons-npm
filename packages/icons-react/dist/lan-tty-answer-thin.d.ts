import React from 'react';

export interface LanTtyAnswerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTtyAnswerThin: React.FC<LanTtyAnswerThinProps>;
export default LanTtyAnswerThin;
