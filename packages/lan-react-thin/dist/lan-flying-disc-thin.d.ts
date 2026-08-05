import React from 'react';

export interface LanFlyingDiscThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlyingDiscThin(props: LanFlyingDiscThinProps): React.ReactElement;
export default LanFlyingDiscThin;
