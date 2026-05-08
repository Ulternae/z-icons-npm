import React from 'react';

export interface MinaLoginSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLoginSolid: React.FC<MinaLoginSolidProps>;
export default MinaLoginSolid;
