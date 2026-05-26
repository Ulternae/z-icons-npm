import React from 'react';

export interface LanCircleEnvelopeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleEnvelopeRegular: React.FC<LanCircleEnvelopeRegularProps>;
export default LanCircleEnvelopeRegular;
