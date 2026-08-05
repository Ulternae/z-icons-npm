import React from 'react';

export interface LanTableCellsHeaderThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsHeaderThin(props: LanTableCellsHeaderThinProps): React.ReactElement;
export default LanTableCellsHeaderThin;
