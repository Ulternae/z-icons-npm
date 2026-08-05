import React from 'react';

export interface LanVrCardboardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVrCardboardSolid(props: LanVrCardboardSolidProps): React.ReactElement;
export default LanVrCardboardSolid;
