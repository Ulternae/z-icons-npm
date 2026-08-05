import React from 'react';

export interface MinaTallyOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTallyOneSolid(props: MinaTallyOneSolidProps): React.ReactElement;
export default MinaTallyOneSolid;
