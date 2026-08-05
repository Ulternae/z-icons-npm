import React from 'react';

export interface LanYinYangSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanYinYangSolid(props: LanYinYangSolidProps): React.ReactElement;
export default LanYinYangSolid;
