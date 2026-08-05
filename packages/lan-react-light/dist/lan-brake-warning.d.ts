import React from 'react';

export interface LanBrakeWarningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrakeWarning(props: LanBrakeWarningProps): React.ReactElement;
export default LanBrakeWarning;
