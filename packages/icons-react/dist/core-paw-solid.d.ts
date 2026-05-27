import React from 'react';

export interface CorePawSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePawSolid: React.FC<CorePawSolidProps>;
export default CorePawSolid;
