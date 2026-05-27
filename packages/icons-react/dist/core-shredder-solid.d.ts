import React from 'react';

export interface CoreShredderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreShredderSolid: React.FC<CoreShredderSolidProps>;
export default CoreShredderSolid;
