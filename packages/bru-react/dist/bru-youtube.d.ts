import React from 'react';

export interface BruYoutubeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruYoutube(props: BruYoutubeProps): React.ReactElement;
export default BruYoutube;
