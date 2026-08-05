import React from 'react';

export interface MinaEnvelopeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEnvelope(props: MinaEnvelopeProps): React.ReactElement;
export default MinaEnvelope;
