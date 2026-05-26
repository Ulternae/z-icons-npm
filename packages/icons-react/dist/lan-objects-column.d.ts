import React from 'react';

export interface LanObjectsColumnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectsColumn: React.FC<LanObjectsColumnProps>;
export default LanObjectsColumn;
