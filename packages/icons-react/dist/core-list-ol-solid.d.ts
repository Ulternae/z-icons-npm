import React from 'react';

export interface CoreListOlSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreListOlSolid: React.FC<CoreListOlSolidProps>;
export default CoreListOlSolid;
