import React from 'react';

export interface CorePenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePenSolid: React.FC<CorePenSolidProps>;
export default CorePenSolid;
