import React from 'react';

export interface LanRecordVinylSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRecordVinylSolid: React.FC<LanRecordVinylSolidProps>;
export default LanRecordVinylSolid;
