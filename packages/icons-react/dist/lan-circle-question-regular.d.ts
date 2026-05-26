import React from 'react';

export interface LanCircleQuestionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleQuestionRegular: React.FC<LanCircleQuestionRegularProps>;
export default LanCircleQuestionRegular;
