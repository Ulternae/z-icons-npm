import React from 'react';

export interface LanMushroomSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMushroomSolid(props: LanMushroomSolidProps): React.ReactElement;
export default LanMushroomSolid;
