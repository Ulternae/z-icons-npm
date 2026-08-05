import React from 'react';

export interface LanMosqueRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMosqueRegular(props: LanMosqueRegularProps): React.ReactElement;
export default LanMosqueRegular;
