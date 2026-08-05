import React from 'react';

export interface LanCrabSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrabSolid(props: LanCrabSolidProps): React.ReactElement;
export default LanCrabSolid;
