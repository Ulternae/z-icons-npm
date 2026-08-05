import React from 'react';

export interface LanBuildingColumnsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingColumns(props: LanBuildingColumnsProps): React.ReactElement;
export default LanBuildingColumns;
