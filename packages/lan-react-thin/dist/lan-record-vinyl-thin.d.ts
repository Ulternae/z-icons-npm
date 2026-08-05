import React from 'react';

export interface LanRecordVinylThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRecordVinylThin(props: LanRecordVinylThinProps): React.ReactElement;
export default LanRecordVinylThin;
