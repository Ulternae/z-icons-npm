import React from 'react';

export interface LanEnvelopeOpenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEnvelopeOpenThin(props: LanEnvelopeOpenThinProps): React.ReactElement;
export default LanEnvelopeOpenThin;
