import React from 'react';

export interface LanBridgeLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBridgeLock(props: LanBridgeLockProps): React.ReactElement;
export default LanBridgeLock;
