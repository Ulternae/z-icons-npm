import React from 'react';

export interface MinaEnvelopeOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEnvelopeOpenSolid(props: MinaEnvelopeOpenSolidProps): React.ReactElement;
export default MinaEnvelopeOpenSolid;
