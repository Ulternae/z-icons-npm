import React from 'react';

export interface LanSemicolonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSemicolonSolid(props: LanSemicolonSolidProps): React.ReactElement;
export default LanSemicolonSolid;
