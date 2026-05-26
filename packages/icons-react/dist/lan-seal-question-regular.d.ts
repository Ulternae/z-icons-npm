import React from 'react';

export interface LanSealQuestionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSealQuestionRegular: React.FC<LanSealQuestionRegularProps>;
export default LanSealQuestionRegular;
