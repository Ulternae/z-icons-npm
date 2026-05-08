import React from 'react';

export interface MinaContactlessCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaContactlessCircleSolid: React.FC<MinaContactlessCircleSolidProps>;
export default MinaContactlessCircleSolid;
