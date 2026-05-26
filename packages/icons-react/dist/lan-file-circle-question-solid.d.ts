import React from 'react';

export interface LanFileCircleQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCircleQuestionSolid: React.FC<LanFileCircleQuestionSolidProps>;
export default LanFileCircleQuestionSolid;
