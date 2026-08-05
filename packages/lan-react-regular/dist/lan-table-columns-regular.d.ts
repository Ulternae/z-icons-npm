import React from 'react';

export interface LanTableColumnsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableColumnsRegular(props: LanTableColumnsRegularProps): React.ReactElement;
export default LanTableColumnsRegular;
