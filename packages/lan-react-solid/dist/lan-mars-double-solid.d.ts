import React from 'react';

export interface LanMarsDoubleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMarsDoubleSolid(props: LanMarsDoubleSolidProps): React.ReactElement;
export default LanMarsDoubleSolid;
