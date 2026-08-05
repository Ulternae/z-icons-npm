import React from 'react';

export interface LanTableColumnsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableColumns(props: LanTableColumnsProps): React.ReactElement;
export default LanTableColumns;
