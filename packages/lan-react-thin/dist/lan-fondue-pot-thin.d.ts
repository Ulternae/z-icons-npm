import React from 'react';

export interface LanFonduePotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFonduePotThin(props: LanFonduePotThinProps): React.ReactElement;
export default LanFonduePotThin;
