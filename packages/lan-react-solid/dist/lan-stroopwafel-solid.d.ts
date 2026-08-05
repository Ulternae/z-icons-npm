import React from 'react';

export interface LanStroopwafelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStroopwafelSolid(props: LanStroopwafelSolidProps): React.ReactElement;
export default LanStroopwafelSolid;
