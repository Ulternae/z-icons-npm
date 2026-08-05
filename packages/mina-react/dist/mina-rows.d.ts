import React from 'react';

export interface MinaRowsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRows(props: MinaRowsProps): React.ReactElement;
export default MinaRows;
