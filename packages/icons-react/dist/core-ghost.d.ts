import React from 'react';

export interface CoreGhostProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreGhost: React.FC<CoreGhostProps>;
export default CoreGhost;
