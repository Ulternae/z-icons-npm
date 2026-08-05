import React from 'react';

export interface LanBoxHeartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxHeartRegular(props: LanBoxHeartRegularProps): React.ReactElement;
export default LanBoxHeartRegular;
