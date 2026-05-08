import React from 'react';

export interface MinaBrandSpotifyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandSpotify: React.FC<MinaBrandSpotifyProps>;
export default MinaBrandSpotify;
