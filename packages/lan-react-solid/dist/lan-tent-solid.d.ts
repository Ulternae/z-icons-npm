import React from 'react';

export interface LanTentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTentSolid(props: LanTentSolidProps): React.ReactElement;
export default LanTentSolid;
