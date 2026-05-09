import React from 'react';

export interface MinaRssSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRssSolid: React.FC<MinaRssSolidProps>;
export default MinaRssSolid;
