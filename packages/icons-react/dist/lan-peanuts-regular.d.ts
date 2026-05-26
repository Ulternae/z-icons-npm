import React from 'react';

export interface LanPeanutsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeanutsRegular: React.FC<LanPeanutsRegularProps>;
export default LanPeanutsRegular;
