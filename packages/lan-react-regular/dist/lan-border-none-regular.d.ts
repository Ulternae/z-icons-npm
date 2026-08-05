import React from 'react';

export interface LanBorderNoneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderNoneRegular(props: LanBorderNoneRegularProps): React.ReactElement;
export default LanBorderNoneRegular;
