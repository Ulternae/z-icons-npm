import React from 'react';

export interface LanBoxCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxCheckSolid(props: LanBoxCheckSolidProps): React.ReactElement;
export default LanBoxCheckSolid;
