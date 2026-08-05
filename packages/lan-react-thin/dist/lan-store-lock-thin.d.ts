import React from 'react';

export interface LanStoreLockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStoreLockThin(props: LanStoreLockThinProps): React.ReactElement;
export default LanStoreLockThin;
