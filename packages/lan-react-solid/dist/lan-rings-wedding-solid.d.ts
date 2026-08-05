import React from 'react';

export interface LanRingsWeddingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRingsWeddingSolid(props: LanRingsWeddingSolidProps): React.ReactElement;
export default LanRingsWeddingSolid;
