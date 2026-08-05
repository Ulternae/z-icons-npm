import React from 'react';

export interface LanGuitarElectricSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGuitarElectricSolid(props: LanGuitarElectricSolidProps): React.ReactElement;
export default LanGuitarElectricSolid;
