import React from 'react';

export interface LanEnvelopeRibbonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEnvelopeRibbonSolid(props: LanEnvelopeRibbonSolidProps): React.ReactElement;
export default LanEnvelopeRibbonSolid;
