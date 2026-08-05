import React from 'react';

export interface LanHeartSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartSquareSolid(props: LanHeartSquareSolidProps): React.ReactElement;
export default LanHeartSquareSolid;
