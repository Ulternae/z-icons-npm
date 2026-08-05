import React from 'react';

export interface LanProjectorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanProjectorSolid(props: LanProjectorSolidProps): React.ReactElement;
export default LanProjectorSolid;
