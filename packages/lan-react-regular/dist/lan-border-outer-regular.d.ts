import React from 'react';

export interface LanBorderOuterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderOuterRegular(props: LanBorderOuterRegularProps): React.ReactElement;
export default LanBorderOuterRegular;
