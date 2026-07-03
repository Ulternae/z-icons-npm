import React from 'react';

export interface BruSquareYoutubeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareYoutube(props: BruSquareYoutubeProps): React.ReactElement;
export default BruSquareYoutube;
