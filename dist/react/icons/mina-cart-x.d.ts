import React from 'react';

export interface MinaCartXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCartX: React.FC<MinaCartXProps>;
export default MinaCartX;
