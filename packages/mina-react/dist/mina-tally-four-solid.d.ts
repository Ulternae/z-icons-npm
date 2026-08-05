import React from 'react';

export interface MinaTallyFourSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTallyFourSolid(props: MinaTallyFourSolidProps): React.ReactElement;
export default MinaTallyFourSolid;
