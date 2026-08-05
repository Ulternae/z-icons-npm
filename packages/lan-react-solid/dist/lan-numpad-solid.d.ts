import React from 'react';

export interface LanNumpadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNumpadSolid(props: LanNumpadSolidProps): React.ReactElement;
export default LanNumpadSolid;
