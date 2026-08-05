import React from 'react';

export interface MinaTallyFiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTallyFive(props: MinaTallyFiveProps): React.ReactElement;
export default MinaTallyFive;
