import React from 'react';

export interface MinaShuffleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShuffle(props: MinaShuffleProps): React.ReactElement;
export default MinaShuffle;
