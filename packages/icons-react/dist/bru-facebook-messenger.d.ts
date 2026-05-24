import React from 'react';

export interface BruFacebookMessengerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruFacebookMessenger: React.FC<BruFacebookMessengerProps>;
export default BruFacebookMessenger;
