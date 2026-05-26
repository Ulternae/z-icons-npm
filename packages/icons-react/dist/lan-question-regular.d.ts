import React from 'react';

export interface LanQuestionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanQuestionRegular: React.FC<LanQuestionRegularProps>;
export default LanQuestionRegular;
