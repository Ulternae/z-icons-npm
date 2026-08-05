import React from 'react';

export interface LanPineappleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPineappleSolid(props: LanPineappleSolidProps): React.ReactElement;
export default LanPineappleSolid;
