import React from 'react';

export interface CoreSkullSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSkullSolid: React.FC<CoreSkullSolidProps>;
export default CoreSkullSolid;
