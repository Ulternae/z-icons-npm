import React from 'react';

export interface LanImageStackSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageStackSolid(props: LanImageStackSolidProps): React.ReactElement;
export default LanImageStackSolid;
