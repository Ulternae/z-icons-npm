import React from 'react';

export interface CoreEnvelopeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreEnvelopeRegularDuo: React.FC<CoreEnvelopeRegularDuoProps>;
export default CoreEnvelopeRegularDuo;
