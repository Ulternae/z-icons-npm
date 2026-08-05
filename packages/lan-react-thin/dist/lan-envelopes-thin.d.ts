import React from 'react';

export interface LanEnvelopesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEnvelopesThin(props: LanEnvelopesThinProps): React.ReactElement;
export default LanEnvelopesThin;
