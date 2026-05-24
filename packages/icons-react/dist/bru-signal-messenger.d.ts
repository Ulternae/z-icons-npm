import React from 'react';

export interface BruSignalMessengerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSignalMessenger: React.FC<BruSignalMessengerProps>;
export default BruSignalMessenger;
