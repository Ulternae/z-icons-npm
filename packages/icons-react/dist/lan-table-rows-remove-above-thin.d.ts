import React from 'react';

export interface LanTableRowsRemoveAboveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableRowsRemoveAboveThin: React.FC<LanTableRowsRemoveAboveThinProps>;
export default LanTableRowsRemoveAboveThin;
