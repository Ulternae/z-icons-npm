import React from 'react';

export interface LanLeafMapleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLeafMapleRegular(props: LanLeafMapleRegularProps): React.ReactElement;
export default LanLeafMapleRegular;
