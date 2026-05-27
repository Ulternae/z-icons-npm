import React from 'react';

export interface CoreNotdefSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreNotdefSolid: React.FC<CoreNotdefSolidProps>;
export default CoreNotdefSolid;
