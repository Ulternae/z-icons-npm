import React from 'react';

export interface LanHRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHRegular(props: LanHRegularProps): React.ReactElement;
export default LanHRegular;
