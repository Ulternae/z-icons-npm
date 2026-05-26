import React from 'react';

export interface LanBuildingMemoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingMemo: React.FC<LanBuildingMemoProps>;
export default LanBuildingMemo;
