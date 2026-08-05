import React from 'react';

export interface LanRefrigeratorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRefrigerator(props: LanRefrigeratorProps): React.ReactElement;
export default LanRefrigerator;
