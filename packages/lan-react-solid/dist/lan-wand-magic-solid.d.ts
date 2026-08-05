import React from 'react';

export interface LanWandMagicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWandMagicSolid(props: LanWandMagicSolidProps): React.ReactElement;
export default LanWandMagicSolid;
