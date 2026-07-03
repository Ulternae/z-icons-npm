import React from 'react';

export interface BruFacebookMessengerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruFacebookMessenger(props: BruFacebookMessengerProps): React.ReactElement;
export default BruFacebookMessenger;
