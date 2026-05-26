import React from 'react';

export interface LanHeaderRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeaderRegular: React.FC<LanHeaderRegularProps>;
export default LanHeaderRegular;
