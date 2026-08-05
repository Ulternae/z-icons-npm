import React from 'react';

export interface LanESolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanESolid(props: LanESolidProps): React.ReactElement;
export default LanESolid;
