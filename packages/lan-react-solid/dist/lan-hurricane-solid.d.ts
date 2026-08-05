import React from 'react';

export interface LanHurricaneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHurricaneSolid(props: LanHurricaneSolidProps): React.ReactElement;
export default LanHurricaneSolid;
