import React from 'react';

export interface LanUnicornSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUnicornSolid(props: LanUnicornSolidProps): React.ReactElement;
export default LanUnicornSolid;
