import React from 'react';

export interface LanFileHeartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileHeartRegular(props: LanFileHeartRegularProps): React.ReactElement;
export default LanFileHeartRegular;
