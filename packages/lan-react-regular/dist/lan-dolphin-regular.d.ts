import React from 'react';

export interface LanDolphinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDolphinRegular(props: LanDolphinRegularProps): React.ReactElement;
export default LanDolphinRegular;
