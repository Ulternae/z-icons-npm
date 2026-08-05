import React from 'react';

export interface LanObjectGroupSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectGroupSolid(props: LanObjectGroupSolidProps): React.ReactElement;
export default LanObjectGroupSolid;
