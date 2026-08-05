import React from 'react';

export interface LanListAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListAltSolid(props: LanListAltSolidProps): React.ReactElement;
export default LanListAltSolid;
