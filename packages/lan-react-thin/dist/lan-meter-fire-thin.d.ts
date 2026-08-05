import React from 'react';

export interface LanMeterFireThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMeterFireThin(props: LanMeterFireThinProps): React.ReactElement;
export default LanMeterFireThin;
