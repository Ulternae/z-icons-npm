import React from 'react';

export interface LanWaveTriangleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaveTriangleSolid(props: LanWaveTriangleSolidProps): React.ReactElement;
export default LanWaveTriangleSolid;
