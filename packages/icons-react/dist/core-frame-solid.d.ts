import React from 'react';

export interface CoreFrameSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFrameSolid: React.FC<CoreFrameSolidProps>;
export default CoreFrameSolid;
