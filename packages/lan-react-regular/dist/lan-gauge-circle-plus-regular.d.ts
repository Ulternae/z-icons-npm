import React from 'react';

export interface LanGaugeCirclePlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeCirclePlusRegular(props: LanGaugeCirclePlusRegularProps): React.ReactElement;
export default LanGaugeCirclePlusRegular;
