import React from 'react';

export interface LanGaugeCircleBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeCircleBolt(props: LanGaugeCircleBoltProps): React.ReactElement;
export default LanGaugeCircleBolt;
