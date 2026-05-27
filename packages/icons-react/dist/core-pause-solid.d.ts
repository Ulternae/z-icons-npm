import React from 'react';

export interface CorePauseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePauseSolid: React.FC<CorePauseSolidProps>;
export default CorePauseSolid;
