import React from 'react';

export interface LanForwardStepRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanForwardStepRegular: React.FC<LanForwardStepRegularProps>;
export default LanForwardStepRegular;
