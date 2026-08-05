import React from 'react';

export interface LanRouterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRouterThin(props: LanRouterThinProps): React.ReactElement;
export default LanRouterThin;
