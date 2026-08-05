import React from 'react';

export interface LanSushiRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSushiRegular(props: LanSushiRegularProps): React.ReactElement;
export default LanSushiRegular;
