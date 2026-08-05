import React from 'react';

export interface LanCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCheckSolid(props: LanCheckSolidProps): React.ReactElement;
export default LanCheckSolid;
