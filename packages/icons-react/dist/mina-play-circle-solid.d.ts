import React from 'react';

export interface MinaPlayCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlayCircleSolid: React.FC<MinaPlayCircleSolidProps>;
export default MinaPlayCircleSolid;
