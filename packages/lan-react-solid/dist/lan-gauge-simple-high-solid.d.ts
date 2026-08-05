import React from 'react';

export interface LanGaugeSimpleHighSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeSimpleHighSolid(props: LanGaugeSimpleHighSolidProps): React.ReactElement;
export default LanGaugeSimpleHighSolid;
