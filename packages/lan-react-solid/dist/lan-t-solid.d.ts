import React from 'react';

export interface LanTSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTSolid(props: LanTSolidProps): React.ReactElement;
export default LanTSolid;
