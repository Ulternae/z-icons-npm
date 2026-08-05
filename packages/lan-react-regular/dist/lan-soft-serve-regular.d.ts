import React from 'react';

export interface LanSoftServeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSoftServeRegular(props: LanSoftServeRegularProps): React.ReactElement;
export default LanSoftServeRegular;
