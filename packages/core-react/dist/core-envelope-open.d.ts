import React from 'react';

export interface CoreEnvelopeOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreEnvelopeOpen(props: CoreEnvelopeOpenProps): React.ReactElement;
export default CoreEnvelopeOpen;
