import React from 'react';

export interface LanMittenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMittenSolid(props: LanMittenSolidProps): React.ReactElement;
export default LanMittenSolid;
