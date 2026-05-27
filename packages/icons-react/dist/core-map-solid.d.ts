import React from 'react';

export interface CoreMapSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMapSolid: React.FC<CoreMapSolidProps>;
export default CoreMapSolid;
