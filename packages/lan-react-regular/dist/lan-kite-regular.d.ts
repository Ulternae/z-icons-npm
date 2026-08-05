import React from 'react';

export interface LanKiteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKiteRegular(props: LanKiteRegularProps): React.ReactElement;
export default LanKiteRegular;
