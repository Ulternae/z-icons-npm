import React from 'react';

export interface LanSnowmanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnowmanSolid(props: LanSnowmanSolidProps): React.ReactElement;
export default LanSnowmanSolid;
