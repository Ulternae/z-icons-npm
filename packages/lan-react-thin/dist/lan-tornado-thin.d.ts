import React from 'react';

export interface LanTornadoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTornadoThin(props: LanTornadoThinProps): React.ReactElement;
export default LanTornadoThin;
