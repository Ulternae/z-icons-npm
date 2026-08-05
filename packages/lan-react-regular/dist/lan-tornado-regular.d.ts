import React from 'react';

export interface LanTornadoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTornadoRegular(props: LanTornadoRegularProps): React.ReactElement;
export default LanTornadoRegular;
