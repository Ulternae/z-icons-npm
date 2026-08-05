import React from 'react';

export interface LanGaugeCircleBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeCircleBoltSolid(props: LanGaugeCircleBoltSolidProps): React.ReactElement;
export default LanGaugeCircleBoltSolid;
