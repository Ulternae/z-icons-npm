import React from 'react';

export interface LanForkliftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanForkliftSolid(props: LanForkliftSolidProps): React.ReactElement;
export default LanForkliftSolid;
