import React from 'react';

export interface NeoPaletteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPaletteSolid(props: NeoPaletteSolidProps): React.ReactElement;
export default NeoPaletteSolid;
