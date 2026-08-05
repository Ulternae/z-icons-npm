import React from 'react';

export interface MinaBrandSpotifyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandSpotify(props: MinaBrandSpotifyProps): React.ReactElement;
export default MinaBrandSpotify;
