import React from 'react';

export interface MinaLocationUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLocationUserSolid: React.FC<MinaLocationUserSolidProps>;
export default MinaLocationUserSolid;
