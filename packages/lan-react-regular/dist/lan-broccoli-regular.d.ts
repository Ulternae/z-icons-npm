import React from 'react';

export interface LanBroccoliRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBroccoliRegular(props: LanBroccoliRegularProps): React.ReactElement;
export default LanBroccoliRegular;
