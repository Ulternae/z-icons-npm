import React from 'react';

export interface LanCannonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCannonSolid(props: LanCannonSolidProps): React.ReactElement;
export default LanCannonSolid;
