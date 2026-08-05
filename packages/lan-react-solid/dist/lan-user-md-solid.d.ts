import React from 'react';

export interface LanUserMdSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserMdSolid(props: LanUserMdSolidProps): React.ReactElement;
export default LanUserMdSolid;
