import React from 'react';

export interface LanFanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFanThin(props: LanFanThinProps): React.ReactElement;
export default LanFanThin;
