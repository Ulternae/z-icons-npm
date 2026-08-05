import React from 'react';

export interface LanOutletRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOutletRegular(props: LanOutletRegularProps): React.ReactElement;
export default LanOutletRegular;
