import React from 'react';

export interface MinaQuestionSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaQuestionSquareSolid: React.FC<MinaQuestionSquareSolidProps>;
export default MinaQuestionSquareSolid;
