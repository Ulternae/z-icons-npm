import React from 'react';

export interface LanRecordVinylSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRecordVinylSolid(props: LanRecordVinylSolidProps): React.ReactElement;
export default LanRecordVinylSolid;
