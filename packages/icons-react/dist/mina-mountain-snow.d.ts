import React from 'react';

export interface MinaMountainSnowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMountainSnow: React.FC<MinaMountainSnowProps>;
export default MinaMountainSnow;
