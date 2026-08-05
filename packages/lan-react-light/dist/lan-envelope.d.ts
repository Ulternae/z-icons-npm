import React from 'react';

export interface LanEnvelopeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEnvelope(props: LanEnvelopeProps): React.ReactElement;
export default LanEnvelope;
