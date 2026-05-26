import React from 'react';

export interface LanCircleQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleQuestionSolid: React.FC<LanCircleQuestionSolidProps>;
export default LanCircleQuestionSolid;
