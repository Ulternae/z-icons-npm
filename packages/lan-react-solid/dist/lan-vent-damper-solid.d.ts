import React from 'react';

export interface LanVentDamperSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVentDamperSolid(props: LanVentDamperSolidProps): React.ReactElement;
export default LanVentDamperSolid;
