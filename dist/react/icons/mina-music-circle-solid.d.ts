import React from 'react';

export interface MinaMusicCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMusicCircleSolid: React.FC<MinaMusicCircleSolidProps>;
export default MinaMusicCircleSolid;
