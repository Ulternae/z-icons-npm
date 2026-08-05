import React from 'react';

export interface LanGaugeSimpleMedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeSimpleMedThin(props: LanGaugeSimpleMedThinProps): React.ReactElement;
export default LanGaugeSimpleMedThin;
