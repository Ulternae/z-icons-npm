import React from 'react';

export interface LanSignatureLockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignatureLockThin(props: LanSignatureLockThinProps): React.ReactElement;
export default LanSignatureLockThin;
