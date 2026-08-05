import React from 'react';

export interface MinaBatteryCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBatteryCheck(props: MinaBatteryCheckProps): React.ReactElement;
export default MinaBatteryCheck;
