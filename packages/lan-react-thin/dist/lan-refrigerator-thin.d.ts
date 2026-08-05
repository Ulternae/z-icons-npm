import React from 'react';

export interface LanRefrigeratorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRefrigeratorThin(props: LanRefrigeratorThinProps): React.ReactElement;
export default LanRefrigeratorThin;
