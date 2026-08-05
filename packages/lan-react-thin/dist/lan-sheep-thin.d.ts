import React from 'react';

export interface LanSheepThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSheepThin(props: LanSheepThinProps): React.ReactElement;
export default LanSheepThin;
