import React from 'react';

export interface LanMangoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMangoSolid(props: LanMangoSolidProps): React.ReactElement;
export default LanMangoSolid;
