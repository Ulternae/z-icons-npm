import React from 'react';

export interface MinaEditOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEditOne: React.FC<MinaEditOneProps>;
export default MinaEditOne;
