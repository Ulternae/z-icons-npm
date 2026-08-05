import React from 'react';

export interface LanHardOfHearingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHardOfHearing(props: LanHardOfHearingProps): React.ReactElement;
export default LanHardOfHearing;
