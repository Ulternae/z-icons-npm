import React from 'react';

export interface LanTreeAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTreeAltSolid(props: LanTreeAltSolidProps): React.ReactElement;
export default LanTreeAltSolid;
