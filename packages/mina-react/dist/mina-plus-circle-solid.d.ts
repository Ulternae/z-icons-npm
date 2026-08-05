import React from 'react';

export interface MinaPlusCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlusCircleSolid(props: MinaPlusCircleSolidProps): React.ReactElement;
export default MinaPlusCircleSolid;
