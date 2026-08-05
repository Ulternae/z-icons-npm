import React from 'react';

export interface LanBridgeLockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBridgeLockThin(props: LanBridgeLockThinProps): React.ReactElement;
export default LanBridgeLockThin;
