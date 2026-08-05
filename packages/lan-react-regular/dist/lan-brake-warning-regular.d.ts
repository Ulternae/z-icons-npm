import React from 'react';

export interface LanBrakeWarningRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrakeWarningRegular(props: LanBrakeWarningRegularProps): React.ReactElement;
export default LanBrakeWarningRegular;
