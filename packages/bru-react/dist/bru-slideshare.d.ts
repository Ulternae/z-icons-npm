import React from 'react';

export interface BruSlideshareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSlideshare(props: BruSlideshareProps): React.ReactElement;
export default BruSlideshare;
