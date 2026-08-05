import React from 'react';

export interface LanPanoramaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPanorama(props: LanPanoramaProps): React.ReactElement;
export default LanPanorama;
