import React from 'react';

export interface MinaTrendingDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTrendingDown(props: MinaTrendingDownProps): React.ReactElement;
export default MinaTrendingDown;
