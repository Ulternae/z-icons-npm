import React from 'react';

export interface LanTableColumnsRemoveBeforeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableColumnsRemoveBefore(props: LanTableColumnsRemoveBeforeProps): React.ReactElement;
export default LanTableColumnsRemoveBefore;
