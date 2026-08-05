import React from 'react';

export interface LanSquareALockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareALockRegular(props: LanSquareALockRegularProps): React.ReactElement;
export default LanSquareALockRegular;
