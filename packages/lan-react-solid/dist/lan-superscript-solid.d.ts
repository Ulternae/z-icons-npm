import React from 'react';

export interface LanSuperscriptSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSuperscriptSolid(props: LanSuperscriptSolidProps): React.ReactElement;
export default LanSuperscriptSolid;
