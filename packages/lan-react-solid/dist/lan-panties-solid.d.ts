import React from 'react';

export interface LanPantiesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPantiesSolid(props: LanPantiesSolidProps): React.ReactElement;
export default LanPantiesSolid;
