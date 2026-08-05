import React from 'react';

export interface MinaEnvelopeOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEnvelopeOpen(props: MinaEnvelopeOpenProps): React.ReactElement;
export default MinaEnvelopeOpen;
