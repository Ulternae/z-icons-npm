import React from 'react';

export interface MinaPlayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlay: React.FC<MinaPlayProps>;
export default MinaPlay;
