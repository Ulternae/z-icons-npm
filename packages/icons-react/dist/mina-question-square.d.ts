import React from 'react';

export interface MinaQuestionSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaQuestionSquare: React.FC<MinaQuestionSquareProps>;
export default MinaQuestionSquare;
