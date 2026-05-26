import React from 'react';

export interface LanRecordVinylRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRecordVinylRegular: React.FC<LanRecordVinylRegularProps>;
export default LanRecordVinylRegular;
