import React from 'react';

export interface MinaScissorsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaScissors: React.FC<MinaScissorsProps>;
export default MinaScissors;
