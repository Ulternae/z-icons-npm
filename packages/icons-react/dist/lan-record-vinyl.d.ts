import React from 'react';

export interface LanRecordVinylProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRecordVinyl: React.FC<LanRecordVinylProps>;
export default LanRecordVinyl;
