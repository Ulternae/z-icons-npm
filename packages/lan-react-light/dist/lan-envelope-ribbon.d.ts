import React from 'react';

export interface LanEnvelopeRibbonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEnvelopeRibbon(props: LanEnvelopeRibbonProps): React.ReactElement;
export default LanEnvelopeRibbon;
