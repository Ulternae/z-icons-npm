import React from 'react';

export interface LanTablePicnicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTablePicnicSolid(props: LanTablePicnicSolidProps): React.ReactElement;
export default LanTablePicnicSolid;
