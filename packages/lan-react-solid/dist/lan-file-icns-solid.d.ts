import React from 'react';

export interface LanFileIcnsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileIcnsSolid(props: LanFileIcnsSolidProps): React.ReactElement;
export default LanFileIcnsSolid;
