import React from 'react';

export interface LanCarSideBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarSideBoltSolid(props: LanCarSideBoltSolidProps): React.ReactElement;
export default LanCarSideBoltSolid;
