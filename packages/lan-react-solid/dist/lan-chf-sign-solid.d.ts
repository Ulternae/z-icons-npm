import React from 'react';

export interface LanChfSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChfSignSolid(props: LanChfSignSolidProps): React.ReactElement;
export default LanChfSignSolid;
