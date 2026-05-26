import React from 'react';

export interface LanTtyAnswerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTtyAnswerRegular: React.FC<LanTtyAnswerRegularProps>;
export default LanTtyAnswerRegular;
