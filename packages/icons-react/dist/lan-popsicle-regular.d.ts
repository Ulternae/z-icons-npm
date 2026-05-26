import React from 'react';

export interface LanPopsicleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPopsicleRegular: React.FC<LanPopsicleRegularProps>;
export default LanPopsicleRegular;
