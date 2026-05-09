import React from 'react';

export interface MinaZapOffSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaZapOffSolid: React.FC<MinaZapOffSolidProps>;
export default MinaZapOffSolid;
