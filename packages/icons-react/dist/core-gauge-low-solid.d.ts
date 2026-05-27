import React from 'react';

export interface CoreGaugeLowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreGaugeLowSolid: React.FC<CoreGaugeLowSolidProps>;
export default CoreGaugeLowSolid;
