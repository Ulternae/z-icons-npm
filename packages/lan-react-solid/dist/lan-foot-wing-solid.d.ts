import React from 'react';

export interface LanFootWingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFootWingSolid(props: LanFootWingSolidProps): React.ReactElement;
export default LanFootWingSolid;
