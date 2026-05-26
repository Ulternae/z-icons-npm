import React from 'react';

export interface LanEyesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEyesRegular: React.FC<LanEyesRegularProps>;
export default LanEyesRegular;
