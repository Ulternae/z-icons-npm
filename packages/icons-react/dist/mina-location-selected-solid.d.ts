import React from 'react';

export interface MinaLocationSelectedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLocationSelectedSolid: React.FC<MinaLocationSelectedSolidProps>;
export default MinaLocationSelectedSolid;
