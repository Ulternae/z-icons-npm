import React from 'react';

export interface CoreEnvelopeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreEnvelope(props: CoreEnvelopeProps): React.ReactElement;
export default CoreEnvelope;
