import React from 'react';

export interface MinaConfettiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaConfettiSolid: React.FC<MinaConfettiSolidProps>;
export default MinaConfettiSolid;
