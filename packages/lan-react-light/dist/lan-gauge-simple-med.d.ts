import React from 'react';

export interface LanGaugeSimpleMedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeSimpleMed(props: LanGaugeSimpleMedProps): React.ReactElement;
export default LanGaugeSimpleMed;
