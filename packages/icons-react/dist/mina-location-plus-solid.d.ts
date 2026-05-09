import React from 'react';

export interface MinaLocationPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLocationPlusSolid: React.FC<MinaLocationPlusSolidProps>;
export default MinaLocationPlusSolid;
