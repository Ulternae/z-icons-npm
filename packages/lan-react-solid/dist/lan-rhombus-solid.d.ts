import React from 'react';

export interface LanRhombusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRhombusSolid(props: LanRhombusSolidProps): React.ReactElement;
export default LanRhombusSolid;
