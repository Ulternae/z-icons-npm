import React from 'react';

export interface MinaTrendingUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTrendingUp(props: MinaTrendingUpProps): React.ReactElement;
export default MinaTrendingUp;
