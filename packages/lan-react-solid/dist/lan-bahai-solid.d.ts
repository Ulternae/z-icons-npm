import React from 'react';

export interface LanBahaiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBahaiSolid(props: LanBahaiSolidProps): React.ReactElement;
export default LanBahaiSolid;
