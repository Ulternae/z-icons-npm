import React from 'react';

export interface LanGaugeSimpleLowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeSimpleLowSolid(props: LanGaugeSimpleLowSolidProps): React.ReactElement;
export default LanGaugeSimpleLowSolid;
