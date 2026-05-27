import React from 'react';

export interface CoreEnvelopeOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreEnvelopeOpen: React.FC<CoreEnvelopeOpenProps>;
export default CoreEnvelopeOpen;
