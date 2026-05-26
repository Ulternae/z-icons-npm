import React from 'react';

export interface LanUserQuestionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserQuestionRegular: React.FC<LanUserQuestionRegularProps>;
export default LanUserQuestionRegular;
