import React from 'react';

export interface LanGaugeCirclePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeCirclePlusSolid(props: LanGaugeCirclePlusSolidProps): React.ReactElement;
export default LanGaugeCirclePlusSolid;
