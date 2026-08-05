import React from 'react';

export interface LanVRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVRegular(props: LanVRegularProps): React.ReactElement;
export default LanVRegular;
