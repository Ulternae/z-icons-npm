import React from 'react';

export interface LanVanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVanSolid(props: LanVanSolidProps): React.ReactElement;
export default LanVanSolid;
