import React from 'react';

export interface LanDedentRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDedentRegular(props: LanDedentRegularProps): React.ReactElement;
export default LanDedentRegular;
