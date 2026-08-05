import React from 'react';

export interface LanEnvelopeSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEnvelopeSquareSolid(props: LanEnvelopeSquareSolidProps): React.ReactElement;
export default LanEnvelopeSquareSolid;
