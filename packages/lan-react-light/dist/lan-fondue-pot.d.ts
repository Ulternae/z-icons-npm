import React from 'react';

export interface LanFonduePotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFonduePot(props: LanFonduePotProps): React.ReactElement;
export default LanFonduePot;
