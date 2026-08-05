import React from 'react';

export interface LanColonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanColonSolid(props: LanColonSolidProps): React.ReactElement;
export default LanColonSolid;
