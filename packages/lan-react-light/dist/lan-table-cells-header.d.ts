import React from 'react';

export interface LanTableCellsHeaderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsHeader(props: LanTableCellsHeaderProps): React.ReactElement;
export default LanTableCellsHeader;
