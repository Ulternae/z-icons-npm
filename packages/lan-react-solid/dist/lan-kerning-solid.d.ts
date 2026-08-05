import React from 'react';

export interface LanKerningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKerningSolid(props: LanKerningSolidProps): React.ReactElement;
export default LanKerningSolid;
