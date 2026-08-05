import React from 'react';

export interface LanPentagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPentagon(props: LanPentagonProps): React.ReactElement;
export default LanPentagon;
