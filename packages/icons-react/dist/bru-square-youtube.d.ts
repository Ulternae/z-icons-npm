import React from 'react';

export interface BruSquareYoutubeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareYoutube: React.FC<BruSquareYoutubeProps>;
export default BruSquareYoutube;
