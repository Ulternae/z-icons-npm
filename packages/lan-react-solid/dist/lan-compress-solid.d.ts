import React from 'react';

export interface LanCompressSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCompressSolid(props: LanCompressSolidProps): React.ReactElement;
export default LanCompressSolid;
