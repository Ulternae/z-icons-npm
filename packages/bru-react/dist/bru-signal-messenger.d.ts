import React from 'react';

export interface BruSignalMessengerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSignalMessenger(props: BruSignalMessengerProps): React.ReactElement;
export default BruSignalMessenger;
