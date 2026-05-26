import React from 'react';

export interface LanGuitarsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGuitars: React.FC<LanGuitarsProps>;
export default LanGuitars;
