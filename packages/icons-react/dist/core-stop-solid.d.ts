import React from 'react';

export interface CoreStopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreStopSolid: React.FC<CoreStopSolidProps>;
export default CoreStopSolid;
