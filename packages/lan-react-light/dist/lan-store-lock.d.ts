import React from 'react';

export interface LanStoreLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStoreLock(props: LanStoreLockProps): React.ReactElement;
export default LanStoreLock;
