import React from 'react';

export interface LanTableRowsAddAboveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableRowsAddAboveThin(props: LanTableRowsAddAboveThinProps): React.ReactElement;
export default LanTableRowsAddAboveThin;
