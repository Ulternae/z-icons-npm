import React from 'react';

export interface LanHashtagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHashtagSolid(props: LanHashtagSolidProps): React.ReactElement;
export default LanHashtagSolid;
