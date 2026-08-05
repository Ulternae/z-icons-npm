import React from 'react';

export interface LanSirenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSirenRegular(props: LanSirenRegularProps): React.ReactElement;
export default LanSirenRegular;
