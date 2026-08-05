import React from 'react';

export interface LanCircleEnvelopeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleEnvelopeRegular(props: LanCircleEnvelopeRegularProps): React.ReactElement;
export default LanCircleEnvelopeRegular;
