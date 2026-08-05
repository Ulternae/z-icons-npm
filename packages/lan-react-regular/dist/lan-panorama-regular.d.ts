import React from 'react';

export interface LanPanoramaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPanoramaRegular(props: LanPanoramaRegularProps): React.ReactElement;
export default LanPanoramaRegular;
