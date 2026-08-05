import React from 'react';

export interface LanSubscriptThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSubscriptThin(props: LanSubscriptThinProps): React.ReactElement;
export default LanSubscriptThin;
