import React from 'react';

export interface LanThumbTackSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThumbTackSolid(props: LanThumbTackSolidProps): React.ReactElement;
export default LanThumbTackSolid;
