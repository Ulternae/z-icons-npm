import React from 'react';

export interface LanBoreHoleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoreHoleRegular(props: LanBoreHoleRegularProps): React.ReactElement;
export default LanBoreHoleRegular;
