import React from 'react';

export interface LanCircleEnvelopeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleEnvelope(props: LanCircleEnvelopeProps): React.ReactElement;
export default LanCircleEnvelope;
