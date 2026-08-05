import React from 'react';

export interface LanRingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRingSolid(props: LanRingSolidProps): React.ReactElement;
export default LanRingSolid;
