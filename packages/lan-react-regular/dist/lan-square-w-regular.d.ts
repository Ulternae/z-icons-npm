import React from 'react';

export interface LanSquareWRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareWRegular(props: LanSquareWRegularProps): React.ReactElement;
export default LanSquareWRegular;
