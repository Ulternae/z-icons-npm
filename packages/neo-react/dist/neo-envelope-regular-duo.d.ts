import React from 'react';

export interface NeoEnvelopeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoEnvelopeRegularDuo(props: NeoEnvelopeRegularDuoProps): React.ReactElement;
export default NeoEnvelopeRegularDuo;
