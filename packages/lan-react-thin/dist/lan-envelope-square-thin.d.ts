import React from 'react';

export interface LanEnvelopeSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEnvelopeSquareThin(props: LanEnvelopeSquareThinProps): React.ReactElement;
export default LanEnvelopeSquareThin;
