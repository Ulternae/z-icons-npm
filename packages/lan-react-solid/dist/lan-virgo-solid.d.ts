import React from 'react';

export interface LanVirgoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVirgoSolid(props: LanVirgoSolidProps): React.ReactElement;
export default LanVirgoSolid;
