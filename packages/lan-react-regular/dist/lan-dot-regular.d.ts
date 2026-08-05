import React from 'react';

export interface LanDotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDotRegular(props: LanDotRegularProps): React.ReactElement;
export default LanDotRegular;
