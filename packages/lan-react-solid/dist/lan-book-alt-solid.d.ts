import React from 'react';

export interface LanBookAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookAltSolid(props: LanBookAltSolidProps): React.ReactElement;
export default LanBookAltSolid;
