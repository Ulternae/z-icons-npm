import React from 'react';

export interface LanLighthouseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLighthouseSolid(props: LanLighthouseSolidProps): React.ReactElement;
export default LanLighthouseSolid;
