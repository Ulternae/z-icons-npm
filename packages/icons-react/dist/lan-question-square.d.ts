import React from 'react';

export interface LanQuestionSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanQuestionSquare: React.FC<LanQuestionSquareProps>;
export default LanQuestionSquare;
