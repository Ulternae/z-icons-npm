import React from 'react';

export interface LanFileCodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCodeSolid(props: LanFileCodeSolidProps): React.ReactElement;
export default LanFileCodeSolid;
