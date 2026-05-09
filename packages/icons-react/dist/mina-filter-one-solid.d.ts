import React from 'react';

export interface MinaFilterOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFilterOneSolid: React.FC<MinaFilterOneSolidProps>;
export default MinaFilterOneSolid;
