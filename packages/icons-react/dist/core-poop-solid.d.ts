import React from 'react';

export interface CorePoopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePoopSolid: React.FC<CorePoopSolidProps>;
export default CorePoopSolid;
