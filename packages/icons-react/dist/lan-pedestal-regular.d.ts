import React from 'react';

export interface LanPedestalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPedestalRegular: React.FC<LanPedestalRegularProps>;
export default LanPedestalRegular;
