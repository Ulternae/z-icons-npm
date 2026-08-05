import React from 'react';

export interface LanLeafHeartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLeafHeartRegular(props: LanLeafHeartRegularProps): React.ReactElement;
export default LanLeafHeartRegular;
