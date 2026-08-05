import React from 'react';

export interface LanMicroscopeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMicroscopeSolid(props: LanMicroscopeSolidProps): React.ReactElement;
export default LanMicroscopeSolid;
