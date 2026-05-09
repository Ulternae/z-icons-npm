import React from 'react';

export interface MinaHeartPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartPlusSolid: React.FC<MinaHeartPlusSolidProps>;
export default MinaHeartPlusSolid;
