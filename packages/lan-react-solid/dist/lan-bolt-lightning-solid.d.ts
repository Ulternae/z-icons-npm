import React from 'react';

export interface LanBoltLightningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoltLightningSolid(props: LanBoltLightningSolidProps): React.ReactElement;
export default LanBoltLightningSolid;
