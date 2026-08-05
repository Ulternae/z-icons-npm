import React from 'react';

export interface LanFonduePotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFonduePotRegular(props: LanFonduePotRegularProps): React.ReactElement;
export default LanFonduePotRegular;
