import React from 'react';

export interface LanTableTreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableTreeSolid(props: LanTableTreeSolidProps): React.ReactElement;
export default LanTableTreeSolid;
