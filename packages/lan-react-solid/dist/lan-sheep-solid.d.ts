import React from 'react';

export interface LanSheepSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSheepSolid(props: LanSheepSolidProps): React.ReactElement;
export default LanSheepSolid;
