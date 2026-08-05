import React from 'react';

export interface LanTildeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTildeSolid(props: LanTildeSolidProps): React.ReactElement;
export default LanTildeSolid;
