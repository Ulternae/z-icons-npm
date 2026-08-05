import React from 'react';

export interface LanSushiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSushiSolid(props: LanSushiSolidProps): React.ReactElement;
export default LanSushiSolid;
