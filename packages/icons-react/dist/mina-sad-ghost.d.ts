import React from 'react';

export interface MinaSadGhostProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSadGhost: React.FC<MinaSadGhostProps>;
export default MinaSadGhost;
