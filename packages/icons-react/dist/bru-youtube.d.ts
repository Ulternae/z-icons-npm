import React from 'react';

export interface BruYoutubeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruYoutube: React.FC<BruYoutubeProps>;
export default BruYoutube;
