import React from 'react';

export interface LanEnvelopeCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEnvelopeCircleCheck(props: LanEnvelopeCircleCheckProps): React.ReactElement;
export default LanEnvelopeCircleCheck;
