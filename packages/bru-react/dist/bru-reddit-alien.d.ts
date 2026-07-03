import React from 'react';

export interface BruRedditAlienProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruRedditAlien(props: BruRedditAlienProps): React.ReactElement;
export default BruRedditAlien;
