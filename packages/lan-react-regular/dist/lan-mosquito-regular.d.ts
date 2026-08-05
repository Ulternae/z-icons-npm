import React from 'react';

export interface LanMosquitoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMosquitoRegular(props: LanMosquitoRegularProps): React.ReactElement;
export default LanMosquitoRegular;
