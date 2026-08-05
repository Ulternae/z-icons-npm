import React from 'react';

export interface LanShowerAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShowerAltSolid(props: LanShowerAltSolidProps): React.ReactElement;
export default LanShowerAltSolid;
