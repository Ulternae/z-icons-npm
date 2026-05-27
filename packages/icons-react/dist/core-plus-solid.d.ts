import React from 'react';

export interface CorePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePlusSolid: React.FC<CorePlusSolidProps>;
export default CorePlusSolid;
