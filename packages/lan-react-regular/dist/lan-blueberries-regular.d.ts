import React from 'react';

export interface LanBlueberriesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlueberriesRegular(props: LanBlueberriesRegularProps): React.ReactElement;
export default LanBlueberriesRegular;
