import React from 'react';

export interface CoreGhostSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreGhostSolid: React.FC<CoreGhostSolidProps>;
export default CoreGhostSolid;
