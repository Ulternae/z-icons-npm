import React from 'react';

export interface LanBabyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBabyRegular(props: LanBabyRegularProps): React.ReactElement;
export default LanBabyRegular;
