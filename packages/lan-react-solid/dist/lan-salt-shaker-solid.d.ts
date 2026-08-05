import React from 'react';

export interface LanSaltShakerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSaltShakerSolid(props: LanSaltShakerSolidProps): React.ReactElement;
export default LanSaltShakerSolid;
