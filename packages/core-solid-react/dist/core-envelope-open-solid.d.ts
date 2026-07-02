import React from 'react';

export interface CoreEnvelopeOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreEnvelopeOpenSolid(props: CoreEnvelopeOpenSolidProps): React.ReactElement;
export default CoreEnvelopeOpenSolid;
