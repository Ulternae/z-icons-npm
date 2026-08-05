import React from 'react';

export interface LanHSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHSquareSolid(props: LanHSquareSolidProps): React.ReactElement;
export default LanHSquareSolid;
