import React from 'react';

export interface MinaPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlusSolid(props: MinaPlusSolidProps): React.ReactElement;
export default MinaPlusSolid;
