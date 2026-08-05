import React from 'react';

export interface LanTableCellsMergeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsMergeThin(props: LanTableCellsMergeThinProps): React.ReactElement;
export default LanTableCellsMergeThin;
