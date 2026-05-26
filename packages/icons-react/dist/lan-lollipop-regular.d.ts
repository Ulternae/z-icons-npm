import React from 'react';

export interface LanLollipopRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLollipopRegular: React.FC<LanLollipopRegularProps>;
export default LanLollipopRegular;
