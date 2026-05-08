import React from 'react';

export interface MinaDiceOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDiceOne: React.FC<MinaDiceOneProps>;
export default MinaDiceOne;
