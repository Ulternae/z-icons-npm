import React from 'react';

export interface LanHandsPrayingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandsPrayingSolid(props: LanHandsPrayingSolidProps): React.ReactElement;
export default LanHandsPrayingSolid;
