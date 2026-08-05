import React from 'react';

export interface LanRadarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRadarSolid(props: LanRadarSolidProps): React.ReactElement;
export default LanRadarSolid;
