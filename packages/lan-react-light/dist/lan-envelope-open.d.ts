import React from 'react';

export interface LanEnvelopeOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEnvelopeOpen(props: LanEnvelopeOpenProps): React.ReactElement;
export default LanEnvelopeOpen;
