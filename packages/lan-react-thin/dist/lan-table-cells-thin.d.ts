import React from 'react';

export interface LanTableCellsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsThin(props: LanTableCellsThinProps): React.ReactElement;
export default LanTableCellsThin;
