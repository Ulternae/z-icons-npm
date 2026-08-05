import React from 'react';

export interface LanCoinsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoinsRegular(props: LanCoinsRegularProps): React.ReactElement;
export default LanCoinsRegular;
