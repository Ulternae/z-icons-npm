import React from 'react';

export interface LanInfoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInfoSolid(props: LanInfoSolidProps): React.ReactElement;
export default LanInfoSolid;
