import React from 'react';

export interface LanTornadoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTornado(props: LanTornadoProps): React.ReactElement;
export default LanTornado;
