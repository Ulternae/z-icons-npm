import React from 'react';

export interface LanCarWashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarWashSolid(props: LanCarWashSolidProps): React.ReactElement;
export default LanCarWashSolid;
