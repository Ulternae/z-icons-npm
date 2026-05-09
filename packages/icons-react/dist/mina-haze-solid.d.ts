import React from 'react';

export interface MinaHazeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHazeSolid: React.FC<MinaHazeSolidProps>;
export default MinaHazeSolid;
