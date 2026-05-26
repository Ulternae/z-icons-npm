import React from 'react';

export interface LanBicepRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBicepRegular: React.FC<LanBicepRegularProps>;
export default LanBicepRegular;
