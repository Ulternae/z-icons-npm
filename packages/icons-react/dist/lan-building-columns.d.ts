import React from 'react';

export interface LanBuildingColumnsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingColumns: React.FC<LanBuildingColumnsProps>;
export default LanBuildingColumns;
