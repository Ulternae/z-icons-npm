import React from 'react';

export interface LanRecordVinylThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRecordVinylThin: React.FC<LanRecordVinylThinProps>;
export default LanRecordVinylThin;
