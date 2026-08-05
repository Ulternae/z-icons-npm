import React from 'react';

export interface LanSeatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSeatRegular(props: LanSeatRegularProps): React.ReactElement;
export default LanSeatRegular;
