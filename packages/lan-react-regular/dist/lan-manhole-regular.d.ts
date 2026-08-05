import React from 'react';

export interface LanManholeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanManholeRegular(props: LanManholeRegularProps): React.ReactElement;
export default LanManholeRegular;
