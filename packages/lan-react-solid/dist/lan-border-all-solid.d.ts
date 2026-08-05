import React from 'react';

export interface LanBorderAllSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderAllSolid(props: LanBorderAllSolidProps): React.ReactElement;
export default LanBorderAllSolid;
