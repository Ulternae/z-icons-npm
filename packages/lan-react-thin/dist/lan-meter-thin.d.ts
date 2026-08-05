import React from 'react';

export interface LanMeterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMeterThin(props: LanMeterThinProps): React.ReactElement;
export default LanMeterThin;
