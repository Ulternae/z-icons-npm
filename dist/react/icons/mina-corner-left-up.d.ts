import React from 'react';

export interface MinaCornerLeftUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCornerLeftUp: React.FC<MinaCornerLeftUpProps>;
export default MinaCornerLeftUp;
