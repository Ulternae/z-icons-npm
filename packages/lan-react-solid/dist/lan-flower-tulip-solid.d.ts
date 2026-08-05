import React from 'react';

export interface LanFlowerTulipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlowerTulipSolid(props: LanFlowerTulipSolidProps): React.ReactElement;
export default LanFlowerTulipSolid;
