import React from 'react';

export interface LanUserQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserQuestionSolid: React.FC<LanUserQuestionSolidProps>;
export default LanUserQuestionSolid;
