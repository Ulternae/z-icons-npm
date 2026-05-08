import React from 'react';

export interface MinaMountainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMountain: React.FC<MinaMountainProps>;
export default MinaMountain;
