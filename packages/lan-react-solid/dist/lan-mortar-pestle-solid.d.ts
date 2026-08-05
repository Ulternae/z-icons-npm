import React from 'react';

export interface LanMortarPestleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMortarPestleSolid(props: LanMortarPestleSolidProps): React.ReactElement;
export default LanMortarPestleSolid;
