import React from 'react';

export interface LanIglooSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIglooSolid(props: LanIglooSolidProps): React.ReactElement;
export default LanIglooSolid;
