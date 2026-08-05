import React from 'react';

export interface LanBarsFilterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarsFilterRegular(props: LanBarsFilterRegularProps): React.ReactElement;
export default LanBarsFilterRegular;
