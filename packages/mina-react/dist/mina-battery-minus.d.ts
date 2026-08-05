import React from 'react';

export interface MinaBatteryMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBatteryMinus(props: MinaBatteryMinusProps): React.ReactElement;
export default MinaBatteryMinus;
