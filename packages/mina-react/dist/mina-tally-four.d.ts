import React from 'react';

export interface MinaTallyFourProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTallyFour(props: MinaTallyFourProps): React.ReactElement;
export default MinaTallyFour;
