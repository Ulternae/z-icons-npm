import React from 'react';

export interface LanTableRowsMergePreviousProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableRowsMergePrevious: React.FC<LanTableRowsMergePreviousProps>;
export default LanTableRowsMergePrevious;
