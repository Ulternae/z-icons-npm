import React from 'react';

export interface MinaPuzzleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPuzzle(props: MinaPuzzleProps): React.ReactElement;
export default MinaPuzzle;
