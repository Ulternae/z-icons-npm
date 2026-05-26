import React from 'react';

export interface LanPersonCircleQuestionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonCircleQuestionRegular: React.FC<LanPersonCircleQuestionRegularProps>;
export default LanPersonCircleQuestionRegular;
