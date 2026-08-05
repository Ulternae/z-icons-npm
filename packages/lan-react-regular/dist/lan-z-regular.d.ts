import React from 'react';

export interface LanZRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanZRegular(props: LanZRegularProps): React.ReactElement;
export default LanZRegular;
