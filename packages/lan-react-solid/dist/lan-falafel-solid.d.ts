import React from 'react';

export interface LanFalafelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFalafelSolid(props: LanFalafelSolidProps): React.ReactElement;
export default LanFalafelSolid;
