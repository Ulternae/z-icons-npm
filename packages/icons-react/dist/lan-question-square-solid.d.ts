import React from 'react';

export interface LanQuestionSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanQuestionSquareSolid: React.FC<LanQuestionSquareSolidProps>;
export default LanQuestionSquareSolid;
