import React from 'react';

export interface LanHatChefSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHatChefSolid(props: LanHatChefSolidProps): React.ReactElement;
export default LanHatChefSolid;
