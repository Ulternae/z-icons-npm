import React from 'react';

export interface LanTintRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTintRegular(props: LanTintRegularProps): React.ReactElement;
export default LanTintRegular;
