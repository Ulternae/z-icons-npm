import React from 'react';

export interface LanBoxAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxAltSolid(props: LanBoxAltSolidProps): React.ReactElement;
export default LanBoxAltSolid;
