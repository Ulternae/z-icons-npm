import React from 'react';

export interface LanLemonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLemonSolid(props: LanLemonSolidProps): React.ReactElement;
export default LanLemonSolid;
