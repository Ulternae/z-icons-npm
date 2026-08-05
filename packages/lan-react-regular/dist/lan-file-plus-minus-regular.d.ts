import React from 'react';

export interface LanFilePlusMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePlusMinusRegular(props: LanFilePlusMinusRegularProps): React.ReactElement;
export default LanFilePlusMinusRegular;
