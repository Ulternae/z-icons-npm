import React from 'react';

export interface LanSignatureLockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignatureLockSolid(props: LanSignatureLockSolidProps): React.ReactElement;
export default LanSignatureLockSolid;
