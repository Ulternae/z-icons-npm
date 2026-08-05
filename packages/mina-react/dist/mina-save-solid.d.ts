import React from 'react';

export interface MinaSaveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSaveSolid(props: MinaSaveSolidProps): React.ReactElement;
export default MinaSaveSolid;
