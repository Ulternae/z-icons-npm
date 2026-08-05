import React from 'react';

export interface LanShekelSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShekelSignThin(props: LanShekelSignThinProps): React.ReactElement;
export default LanShekelSignThin;
