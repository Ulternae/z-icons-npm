import React from 'react';

export interface LanShoeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShoe: React.FC<LanShoeProps>;
export default LanShoe;
