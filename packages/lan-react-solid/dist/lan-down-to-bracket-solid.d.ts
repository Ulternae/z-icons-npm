import React from 'react';

export interface LanDownToBracketSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDownToBracketSolid(props: LanDownToBracketSolidProps): React.ReactElement;
export default LanDownToBracketSolid;
