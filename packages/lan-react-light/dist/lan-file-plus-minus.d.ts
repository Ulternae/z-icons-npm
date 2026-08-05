import React from 'react';

export interface LanFilePlusMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePlusMinus(props: LanFilePlusMinusProps): React.ReactElement;
export default LanFilePlusMinus;
