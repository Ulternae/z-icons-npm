import React from 'react';

export interface LanSwordSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSwordSolid(props: LanSwordSolidProps): React.ReactElement;
export default LanSwordSolid;
