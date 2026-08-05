import React from 'react';

export interface LanGridVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGridVerticalSolid(props: LanGridVerticalSolidProps): React.ReactElement;
export default LanGridVerticalSolid;
