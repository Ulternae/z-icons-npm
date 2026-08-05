import React from 'react';

export interface LanBootSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBootSolid(props: LanBootSolidProps): React.ReactElement;
export default LanBootSolid;
