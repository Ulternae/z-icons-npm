import React from 'react';

export interface MinaTallyFiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTallyFiveSolid(props: MinaTallyFiveSolidProps): React.ReactElement;
export default MinaTallyFiveSolid;
