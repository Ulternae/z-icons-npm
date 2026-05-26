import React from 'react';

export interface LanQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanQuestionSolid: React.FC<LanQuestionSolidProps>;
export default LanQuestionSolid;
