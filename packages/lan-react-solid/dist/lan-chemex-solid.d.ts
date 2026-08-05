import React from 'react';

export interface LanChemexSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChemexSolid(props: LanChemexSolidProps): React.ReactElement;
export default LanChemexSolid;
