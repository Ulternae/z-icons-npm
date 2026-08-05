import React from 'react';

export interface LanDollyEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDollyEmptySolid(props: LanDollyEmptySolidProps): React.ReactElement;
export default LanDollyEmptySolid;
