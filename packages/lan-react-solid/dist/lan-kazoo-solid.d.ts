import React from 'react';

export interface LanKazooSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKazooSolid(props: LanKazooSolidProps): React.ReactElement;
export default LanKazooSolid;
