import React from 'react';

export interface LanChemexProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChemex(props: LanChemexProps): React.ReactElement;
export default LanChemex;
