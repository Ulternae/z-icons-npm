import React from 'react';

export interface LanTableRowsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableRowsThin(props: LanTableRowsThinProps): React.ReactElement;
export default LanTableRowsThin;
