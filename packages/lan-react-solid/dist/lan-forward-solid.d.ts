import React from 'react';

export interface LanForwardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanForwardSolid(props: LanForwardSolidProps): React.ReactElement;
export default LanForwardSolid;
