import React from 'react';

export interface BruUnsplashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruUnsplash(props: BruUnsplashProps): React.ReactElement;
export default BruUnsplash;
