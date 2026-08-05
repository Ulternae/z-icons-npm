import React from 'react';

export interface LanFileCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCheckSolid(props: LanFileCheckSolidProps): React.ReactElement;
export default LanFileCheckSolid;
