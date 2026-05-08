import React from 'react';

export interface MinaShuffleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShuffle: React.FC<MinaShuffleProps>;
export default MinaShuffle;
