import React from 'react';

export interface LanMemoPadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMemoPadSolid(props: LanMemoPadSolidProps): React.ReactElement;
export default LanMemoPadSolid;
