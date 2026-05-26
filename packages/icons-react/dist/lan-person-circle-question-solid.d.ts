import React from 'react';

export interface LanPersonCircleQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonCircleQuestionSolid: React.FC<LanPersonCircleQuestionSolidProps>;
export default LanPersonCircleQuestionSolid;
