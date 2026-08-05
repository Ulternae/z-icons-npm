import React from 'react';

export interface LanMeatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMeatRegular(props: LanMeatRegularProps): React.ReactElement;
export default LanMeatRegular;
