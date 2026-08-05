import React from 'react';

export interface LanMinusSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMinusSquareSolid(props: LanMinusSquareSolidProps): React.ReactElement;
export default LanMinusSquareSolid;
