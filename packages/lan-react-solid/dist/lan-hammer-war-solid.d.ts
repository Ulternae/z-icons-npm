import React from 'react';

export interface LanHammerWarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHammerWarSolid(props: LanHammerWarSolidProps): React.ReactElement;
export default LanHammerWarSolid;
