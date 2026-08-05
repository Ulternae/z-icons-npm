import React from 'react';

export interface LanTableColumnsAddAfterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableColumnsAddAfter(props: LanTableColumnsAddAfterProps): React.ReactElement;
export default LanTableColumnsAddAfter;
