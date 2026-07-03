import React from 'react';

export interface BruGooglePlayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGooglePlay(props: BruGooglePlayProps): React.ReactElement;
export default BruGooglePlay;
