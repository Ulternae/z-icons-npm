import React from 'react';

export interface LanMosquitoNetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMosquitoNetRegular(props: LanMosquitoNetRegularProps): React.ReactElement;
export default LanMosquitoNetRegular;
