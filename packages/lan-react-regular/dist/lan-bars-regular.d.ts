import React from 'react';

export interface LanBarsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarsRegular(props: LanBarsRegularProps): React.ReactElement;
export default LanBarsRegular;
