import React from 'react';

export interface MinaPauseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPauseSolid(props: MinaPauseSolidProps): React.ReactElement;
export default MinaPauseSolid;
