import React from 'react';

export interface LanImageBrokenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageBrokenSolid(props: LanImageBrokenSolidProps): React.ReactElement;
export default LanImageBrokenSolid;
