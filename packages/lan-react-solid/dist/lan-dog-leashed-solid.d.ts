import React from 'react';

export interface LanDogLeashedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDogLeashedSolid(props: LanDogLeashedSolidProps): React.ReactElement;
export default LanDogLeashedSolid;
