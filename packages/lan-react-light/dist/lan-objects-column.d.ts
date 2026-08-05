import React from 'react';

export interface LanObjectsColumnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectsColumn(props: LanObjectsColumnProps): React.ReactElement;
export default LanObjectsColumn;
