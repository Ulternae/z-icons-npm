import React from 'react';

export interface LanTableRowsMergePreviousProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableRowsMergePrevious(props: LanTableRowsMergePreviousProps): React.ReactElement;
export default LanTableRowsMergePrevious;
