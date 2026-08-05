import React from 'react';

export interface LanTacoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTacoSolid(props: LanTacoSolidProps): React.ReactElement;
export default LanTacoSolid;
