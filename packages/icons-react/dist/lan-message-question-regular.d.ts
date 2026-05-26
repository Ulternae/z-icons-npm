import React from 'react';

export interface LanMessageQuestionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessageQuestionRegular: React.FC<LanMessageQuestionRegularProps>;
export default LanMessageQuestionRegular;
