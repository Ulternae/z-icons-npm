import React from 'react';

export interface LanChemexRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChemexRegular(props: LanChemexRegularProps): React.ReactElement;
export default LanChemexRegular;
