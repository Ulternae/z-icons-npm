import React from 'react';

export interface LanTornadoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTornadoSolid(props: LanTornadoSolidProps): React.ReactElement;
export default LanTornadoSolid;
