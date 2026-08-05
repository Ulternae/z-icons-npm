import React from 'react';

export interface LanShirtRunningThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShirtRunningThin(props: LanShirtRunningThinProps): React.ReactElement;
export default LanShirtRunningThin;
