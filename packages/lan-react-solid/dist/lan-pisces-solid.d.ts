import React from 'react';

export interface LanPiscesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPiscesSolid(props: LanPiscesSolidProps): React.ReactElement;
export default LanPiscesSolid;
