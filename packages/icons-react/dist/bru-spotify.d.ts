import React from 'react';

export interface BruSpotifyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSpotify: React.FC<BruSpotifyProps>;
export default BruSpotify;
