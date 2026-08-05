import React from 'react';

export interface LanUserVisorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserVisorSolid(props: LanUserVisorSolidProps): React.ReactElement;
export default LanUserVisorSolid;
