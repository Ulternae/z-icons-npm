import React from 'react';

export interface LanApertureSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanApertureSolid(props: LanApertureSolidProps): React.ReactElement;
export default LanApertureSolid;
