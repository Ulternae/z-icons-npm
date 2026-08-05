import React from 'react';

export interface LanEnvelopeRibbonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEnvelopeRibbonThin(props: LanEnvelopeRibbonThinProps): React.ReactElement;
export default LanEnvelopeRibbonThin;
