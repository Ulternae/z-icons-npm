import React from 'react';

export interface CoreEnvelopeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreEnvelopeRegularDuo(props: CoreEnvelopeRegularDuoProps): React.ReactElement;
export default CoreEnvelopeRegularDuo;
