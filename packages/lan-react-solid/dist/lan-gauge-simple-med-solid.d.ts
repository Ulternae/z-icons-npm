import React from 'react';

export interface LanGaugeSimpleMedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeSimpleMedSolid(props: LanGaugeSimpleMedSolidProps): React.ReactElement;
export default LanGaugeSimpleMedSolid;
