import React from 'react';

export interface MinaTallyThreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTallyThreeSolid(props: MinaTallyThreeSolidProps): React.ReactElement;
export default MinaTallyThreeSolid;
