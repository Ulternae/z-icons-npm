import React from 'react';

export interface MinaXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaX: React.FC<MinaXProps>;
export default MinaX;
