import React from 'react';

export interface LanMattressPillowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMattressPillowSolid(props: LanMattressPillowSolidProps): React.ReactElement;
export default LanMattressPillowSolid;
