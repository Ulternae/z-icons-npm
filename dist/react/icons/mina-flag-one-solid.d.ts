import React from 'react';

export interface MinaFlagOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFlagOneSolid: React.FC<MinaFlagOneSolidProps>;
export default MinaFlagOneSolid;
