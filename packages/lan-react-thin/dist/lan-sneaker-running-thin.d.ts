import React from 'react';

export interface LanSneakerRunningThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSneakerRunningThin(props: LanSneakerRunningThinProps): React.ReactElement;
export default LanSneakerRunningThin;
