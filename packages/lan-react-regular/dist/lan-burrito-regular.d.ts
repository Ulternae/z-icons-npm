import React from 'react';

export interface LanBurritoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurritoRegular(props: LanBurritoRegularProps): React.ReactElement;
export default LanBurritoRegular;
