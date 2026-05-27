import React from 'react';

export interface NeoEnvelopeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoEnvelopeRegularDuo: React.FC<NeoEnvelopeRegularDuoProps>;
export default NeoEnvelopeRegularDuo;
