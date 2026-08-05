import React from 'react';

export interface LanFlorinSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlorinSignSolid(props: LanFlorinSignSolidProps): React.ReactElement;
export default LanFlorinSignSolid;
