import React from 'react';

export interface LanTtyAnswerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTtyAnswerSolid: React.FC<LanTtyAnswerSolidProps>;
export default LanTtyAnswerSolid;
