import React from 'react';

export interface MinaMagnetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMagnetSolid: React.FC<MinaMagnetSolidProps>;
export default MinaMagnetSolid;
