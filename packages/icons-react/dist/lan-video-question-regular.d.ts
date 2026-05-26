import React from 'react';

export interface LanVideoQuestionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVideoQuestionRegular: React.FC<LanVideoQuestionRegularProps>;
export default LanVideoQuestionRegular;
