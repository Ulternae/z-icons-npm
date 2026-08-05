import React from 'react';

export interface LanColonSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanColonSignSolid(props: LanColonSignSolidProps): React.ReactElement;
export default LanColonSignSolid;
