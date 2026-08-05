import React from 'react';

export interface LanOctopusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOctopusSolid(props: LanOctopusSolidProps): React.ReactElement;
export default LanOctopusSolid;
