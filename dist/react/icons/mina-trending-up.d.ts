import React from 'react';

export interface MinaTrendingUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTrendingUp: React.FC<MinaTrendingUpProps>;
export default MinaTrendingUp;
