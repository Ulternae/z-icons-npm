import React from 'react';

export interface LanEnvelopeOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEnvelopeOpenSolid(props: LanEnvelopeOpenSolidProps): React.ReactElement;
export default LanEnvelopeOpenSolid;
