import React from 'react';

export interface MinaTwoCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTwoCircleSolid: React.FC<MinaTwoCircleSolidProps>;
export default MinaTwoCircleSolid;
