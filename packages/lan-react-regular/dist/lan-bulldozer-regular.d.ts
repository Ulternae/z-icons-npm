import React from 'react';

export interface LanBulldozerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBulldozerRegular(props: LanBulldozerRegularProps): React.ReactElement;
export default LanBulldozerRegular;
