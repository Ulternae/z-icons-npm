import React from 'react';

export interface LanSplitSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSplitSolid(props: LanSplitSolidProps): React.ReactElement;
export default LanSplitSolid;
