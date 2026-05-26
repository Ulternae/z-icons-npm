import React from 'react';

export interface LanPanoramaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPanorama: React.FC<LanPanoramaProps>;
export default LanPanorama;
