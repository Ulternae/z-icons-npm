import React from 'react';

export interface LanQuestionSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanQuestionSquareRegular: React.FC<LanQuestionSquareRegularProps>;
export default LanQuestionSquareRegular;
