import React from 'react';

export interface LanFonduePotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFonduePotSolid(props: LanFonduePotSolidProps): React.ReactElement;
export default LanFonduePotSolid;
