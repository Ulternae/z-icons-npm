import React from 'react';

export interface MinaTallyTwoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTallyTwo(props: MinaTallyTwoProps): React.ReactElement;
export default MinaTallyTwo;
