import React from 'react';

export interface LanDryerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDryerThin(props: LanDryerThinProps): React.ReactElement;
export default LanDryerThin;
