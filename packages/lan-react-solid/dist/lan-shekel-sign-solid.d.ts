import React from 'react';

export interface LanShekelSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShekelSignSolid(props: LanShekelSignSolidProps): React.ReactElement;
export default LanShekelSignSolid;
