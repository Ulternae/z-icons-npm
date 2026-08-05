import React from 'react';

export interface LanStoolSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStoolSolid(props: LanStoolSolidProps): React.ReactElement;
export default LanStoolSolid;
