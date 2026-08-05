import React from 'react';

export interface LanCodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCodeSolid(props: LanCodeSolidProps): React.ReactElement;
export default LanCodeSolid;
