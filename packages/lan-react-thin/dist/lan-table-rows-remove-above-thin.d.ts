import React from 'react';

export interface LanTableRowsRemoveAboveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableRowsRemoveAboveThin(props: LanTableRowsRemoveAboveThinProps): React.ReactElement;
export default LanTableRowsRemoveAboveThin;
