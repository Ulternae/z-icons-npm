import React from 'react';

export interface LanIdCardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIdCardSolid(props: LanIdCardSolidProps): React.ReactElement;
export default LanIdCardSolid;
