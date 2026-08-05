import React from 'react';

export interface LanPegasusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPegasusRegular(props: LanPegasusRegularProps): React.ReactElement;
export default LanPegasusRegular;
