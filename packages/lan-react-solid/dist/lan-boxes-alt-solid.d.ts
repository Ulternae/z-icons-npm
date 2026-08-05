import React from 'react';

export interface LanBoxesAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxesAltSolid(props: LanBoxesAltSolidProps): React.ReactElement;
export default LanBoxesAltSolid;
