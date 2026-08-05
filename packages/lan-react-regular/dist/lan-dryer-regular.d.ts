import React from 'react';

export interface LanDryerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDryerRegular(props: LanDryerRegularProps): React.ReactElement;
export default LanDryerRegular;
