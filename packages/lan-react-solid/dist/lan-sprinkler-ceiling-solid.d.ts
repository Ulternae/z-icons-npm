import React from 'react';

export interface LanSprinklerCeilingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSprinklerCeilingSolid(props: LanSprinklerCeilingSolidProps): React.ReactElement;
export default LanSprinklerCeilingSolid;
