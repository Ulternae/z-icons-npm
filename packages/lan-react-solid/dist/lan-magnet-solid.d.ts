import React from 'react';

export interface LanMagnetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMagnetSolid(props: LanMagnetSolidProps): React.ReactElement;
export default LanMagnetSolid;
