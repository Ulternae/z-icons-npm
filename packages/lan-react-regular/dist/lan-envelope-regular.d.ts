import React from 'react';

export interface LanEnvelopeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEnvelopeRegular(props: LanEnvelopeRegularProps): React.ReactElement;
export default LanEnvelopeRegular;
