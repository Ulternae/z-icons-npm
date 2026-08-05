import React from 'react';

export interface LanPanFryingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPanFryingSolid(props: LanPanFryingSolidProps): React.ReactElement;
export default LanPanFryingSolid;
