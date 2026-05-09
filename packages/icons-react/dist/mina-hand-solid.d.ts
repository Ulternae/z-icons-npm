import React from 'react';

export interface MinaHandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHandSolid: React.FC<MinaHandSolidProps>;
export default MinaHandSolid;
