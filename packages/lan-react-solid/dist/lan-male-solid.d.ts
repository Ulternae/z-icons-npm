import React from 'react';

export interface LanMaleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMaleSolid(props: LanMaleSolidProps): React.ReactElement;
export default LanMaleSolid;
