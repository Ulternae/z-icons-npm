import React from 'react';

export interface LanSignHangingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignHangingSolid(props: LanSignHangingSolidProps): React.ReactElement;
export default LanSignHangingSolid;
