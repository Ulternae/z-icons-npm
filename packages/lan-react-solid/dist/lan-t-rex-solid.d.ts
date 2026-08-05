import React from 'react';

export interface LanTRexSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTRexSolid(props: LanTRexSolidProps): React.ReactElement;
export default LanTRexSolid;
