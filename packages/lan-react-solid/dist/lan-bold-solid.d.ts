import React from 'react';

export interface LanBoldSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoldSolid(props: LanBoldSolidProps): React.ReactElement;
export default LanBoldSolid;
