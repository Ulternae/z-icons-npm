import React from 'react';

export interface LanMessageCodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessageCodeSolid(props: LanMessageCodeSolidProps): React.ReactElement;
export default LanMessageCodeSolid;
