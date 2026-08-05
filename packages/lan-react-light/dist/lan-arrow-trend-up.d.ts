import React from 'react';

export interface LanArrowTrendUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowTrendUp(props: LanArrowTrendUpProps): React.ReactElement;
export default LanArrowTrendUp;
