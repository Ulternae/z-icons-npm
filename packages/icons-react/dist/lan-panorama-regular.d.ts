import React from 'react';

export interface LanPanoramaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPanoramaRegular: React.FC<LanPanoramaRegularProps>;
export default LanPanoramaRegular;
