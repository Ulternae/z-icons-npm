import React from 'react';

export interface MinaOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaOne: React.FC<MinaOneProps>;
export default MinaOne;
