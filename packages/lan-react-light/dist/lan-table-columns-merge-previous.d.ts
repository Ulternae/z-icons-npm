import React from 'react';

export interface LanTableColumnsMergePreviousProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableColumnsMergePrevious(props: LanTableColumnsMergePreviousProps): React.ReactElement;
export default LanTableColumnsMergePrevious;
