import React from 'react';

export interface LanEnvelopeRibbonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEnvelopeRibbonRegular(props: LanEnvelopeRibbonRegularProps): React.ReactElement;
export default LanEnvelopeRibbonRegular;
