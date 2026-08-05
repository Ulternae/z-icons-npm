import React from 'react';

export interface NeoEnvelopeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoEnvelope(props: NeoEnvelopeProps): React.ReactElement;
export default NeoEnvelope;
