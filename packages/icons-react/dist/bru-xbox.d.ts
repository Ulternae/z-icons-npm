import React from 'react';

export interface BruXboxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruXbox: React.FC<BruXboxProps>;
export default BruXbox;
