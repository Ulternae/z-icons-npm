import React from 'react';

export interface MinaQuestionDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaQuestionDiamondSolid: React.FC<MinaQuestionDiamondSolidProps>;
export default MinaQuestionDiamondSolid;
