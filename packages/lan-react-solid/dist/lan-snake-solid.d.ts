import React from 'react';

export interface LanSnakeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnakeSolid(props: LanSnakeSolidProps): React.ReactElement;
export default LanSnakeSolid;
