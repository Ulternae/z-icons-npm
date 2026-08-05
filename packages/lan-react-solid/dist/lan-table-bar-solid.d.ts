import React from 'react';

export interface LanTableBarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableBarSolid(props: LanTableBarSolidProps): React.ReactElement;
export default LanTableBarSolid;
