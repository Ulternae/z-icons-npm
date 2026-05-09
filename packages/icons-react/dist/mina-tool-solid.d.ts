import React from 'react';

export interface MinaToolSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaToolSolid: React.FC<MinaToolSolidProps>;
export default MinaToolSolid;
