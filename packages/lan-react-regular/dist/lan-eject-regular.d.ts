import React from 'react';

export interface LanEjectRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEjectRegular(props: LanEjectRegularProps): React.ReactElement;
export default LanEjectRegular;
