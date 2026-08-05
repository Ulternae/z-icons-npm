import React from 'react';

export interface LanCoinVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoinVertical(props: LanCoinVerticalProps): React.ReactElement;
export default LanCoinVertical;
