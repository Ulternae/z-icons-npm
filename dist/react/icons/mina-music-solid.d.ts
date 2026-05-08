import React from 'react';

export interface MinaMusicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMusicSolid: React.FC<MinaMusicSolidProps>;
export default MinaMusicSolid;
