import React from 'react';

export interface LanDrawSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrawSquareSolid(props: LanDrawSquareSolidProps): React.ReactElement;
export default LanDrawSquareSolid;
