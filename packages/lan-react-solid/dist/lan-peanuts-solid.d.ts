import React from 'react';

export interface LanPeanutsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeanutsSolid(props: LanPeanutsSolidProps): React.ReactElement;
export default LanPeanutsSolid;
