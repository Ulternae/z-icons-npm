import React from 'react';

export interface LanBackwardStepRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBackwardStepRegular: React.FC<LanBackwardStepRegularProps>;
export default LanBackwardStepRegular;
