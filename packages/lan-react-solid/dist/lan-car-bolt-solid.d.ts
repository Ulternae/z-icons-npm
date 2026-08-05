import React from 'react';

export interface LanCarBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarBoltSolid(props: LanCarBoltSolidProps): React.ReactElement;
export default LanCarBoltSolid;
