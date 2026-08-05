import React from 'react';

export interface LanShareAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShareAltSolid(props: LanShareAltSolidProps): React.ReactElement;
export default LanShareAltSolid;
