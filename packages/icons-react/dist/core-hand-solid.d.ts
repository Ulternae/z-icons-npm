import React from 'react';

export interface CoreHandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreHandSolid: React.FC<CoreHandSolidProps>;
export default CoreHandSolid;
