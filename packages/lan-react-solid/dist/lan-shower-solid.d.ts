import React from 'react';

export interface LanShowerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShowerSolid(props: LanShowerSolidProps): React.ReactElement;
export default LanShowerSolid;
