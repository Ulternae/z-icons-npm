import React from 'react';

export interface LanDogSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDogSolid(props: LanDogSolidProps): React.ReactElement;
export default LanDogSolid;
