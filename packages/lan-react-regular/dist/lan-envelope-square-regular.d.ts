import React from 'react';

export interface LanEnvelopeSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEnvelopeSquareRegular(props: LanEnvelopeSquareRegularProps): React.ReactElement;
export default LanEnvelopeSquareRegular;
