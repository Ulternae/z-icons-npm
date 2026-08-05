import React from 'react';

export interface LanPantsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPantsSolid(props: LanPantsSolidProps): React.ReactElement;
export default LanPantsSolid;
