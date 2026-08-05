import React from 'react';

export interface LanPersonRunningThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonRunningThin(props: LanPersonRunningThinProps): React.ReactElement;
export default LanPersonRunningThin;
