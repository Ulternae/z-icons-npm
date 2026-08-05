import React from 'react';

export interface LanEnvelopesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEnvelopesSolid(props: LanEnvelopesSolidProps): React.ReactElement;
export default LanEnvelopesSolid;
