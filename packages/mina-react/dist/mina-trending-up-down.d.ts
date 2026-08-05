import React from 'react';

export interface MinaTrendingUpDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTrendingUpDown(props: MinaTrendingUpDownProps): React.ReactElement;
export default MinaTrendingUpDown;
