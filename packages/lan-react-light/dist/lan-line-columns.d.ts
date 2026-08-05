import React from 'react';

export interface LanLineColumnsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLineColumns(props: LanLineColumnsProps): React.ReactElement;
export default LanLineColumns;
