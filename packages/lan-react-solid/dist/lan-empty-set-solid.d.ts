import React from 'react';

export interface LanEmptySetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEmptySetSolid(props: LanEmptySetSolidProps): React.ReactElement;
export default LanEmptySetSolid;
