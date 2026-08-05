import React from 'react';

export interface LanGaugeSimpleMaxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeSimpleMaxSolid(props: LanGaugeSimpleMaxSolidProps): React.ReactElement;
export default LanGaugeSimpleMaxSolid;
