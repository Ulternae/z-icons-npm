import React from 'react';

export interface LanRecordVinylProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRecordVinyl(props: LanRecordVinylProps): React.ReactElement;
export default LanRecordVinyl;
