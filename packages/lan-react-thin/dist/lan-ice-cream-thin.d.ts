import React from 'react';

export interface LanIceCreamThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIceCreamThin(props: LanIceCreamThinProps): React.ReactElement;
export default LanIceCreamThin;
