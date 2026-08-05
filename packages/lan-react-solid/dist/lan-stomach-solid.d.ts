import React from 'react';

export interface LanStomachSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStomachSolid(props: LanStomachSolidProps): React.ReactElement;
export default LanStomachSolid;
