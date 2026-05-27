import React from 'react';

export interface CoreListUlSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreListUlSolid: React.FC<CoreListUlSolidProps>;
export default CoreListUlSolid;
