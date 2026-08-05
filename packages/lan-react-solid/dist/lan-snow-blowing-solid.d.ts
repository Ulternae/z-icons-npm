import React from 'react';

export interface LanSnowBlowingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnowBlowingSolid(props: LanSnowBlowingSolidProps): React.ReactElement;
export default LanSnowBlowingSolid;
