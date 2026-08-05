import React from 'react';

export interface LanHouseLockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseLockThin(props: LanHouseLockThinProps): React.ReactElement;
export default LanHouseLockThin;
