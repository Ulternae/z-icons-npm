import React from 'react';

export interface MinaPuzzleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPuzzle: React.FC<MinaPuzzleProps>;
export default MinaPuzzle;
