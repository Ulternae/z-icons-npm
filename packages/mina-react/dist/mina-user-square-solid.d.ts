import React from 'react';

export interface MinaUserSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUserSquareSolid(props: MinaUserSquareSolidProps): React.ReactElement;
export default MinaUserSquareSolid;
