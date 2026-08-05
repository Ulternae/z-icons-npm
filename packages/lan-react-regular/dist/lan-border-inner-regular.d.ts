import React from 'react';

export interface LanBorderInnerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderInnerRegular(props: LanBorderInnerRegularProps): React.ReactElement;
export default LanBorderInnerRegular;
