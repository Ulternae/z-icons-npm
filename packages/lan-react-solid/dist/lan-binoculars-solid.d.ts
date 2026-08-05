import React from 'react';

export interface LanBinocularsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBinocularsSolid(props: LanBinocularsSolidProps): React.ReactElement;
export default LanBinocularsSolid;
