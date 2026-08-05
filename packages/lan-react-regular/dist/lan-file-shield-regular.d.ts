import React from 'react';

export interface LanFileShieldRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileShieldRegular(props: LanFileShieldRegularProps): React.ReactElement;
export default LanFileShieldRegular;
