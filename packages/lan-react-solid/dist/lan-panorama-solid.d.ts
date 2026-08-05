import React from 'react';

export interface LanPanoramaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPanoramaSolid(props: LanPanoramaSolidProps): React.ReactElement;
export default LanPanoramaSolid;
