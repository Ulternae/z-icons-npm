import React from 'react';

export interface LanTableColumnsAddBeforeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableColumnsAddBefore(props: LanTableColumnsAddBeforeProps): React.ReactElement;
export default LanTableColumnsAddBefore;
