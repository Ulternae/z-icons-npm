import React from 'react';

export interface LanBrakeWarningThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrakeWarningThin(props: LanBrakeWarningThinProps): React.ReactElement;
export default LanBrakeWarningThin;
