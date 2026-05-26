import React from 'react';

export interface LanTableRowsAddAboveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableRowsAddAboveThin: React.FC<LanTableRowsAddAboveThinProps>;
export default LanTableRowsAddAboveThin;
