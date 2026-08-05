import React from 'react';

export interface NeoPauseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPauseSolid(props: NeoPauseSolidProps): React.ReactElement;
export default NeoPauseSolid;
