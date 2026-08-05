import React from 'react';

export interface LanThListSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThListSolid(props: LanThListSolidProps): React.ReactElement;
export default LanThListSolid;
