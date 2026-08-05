import React from 'react';

export interface LanRadiationSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRadiationSolid(props: LanRadiationSolidProps): React.ReactElement;
export default LanRadiationSolid;
