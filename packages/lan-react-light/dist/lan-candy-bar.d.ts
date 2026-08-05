import React from 'react';

export interface LanCandyBarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCandyBar(props: LanCandyBarProps): React.ReactElement;
export default LanCandyBar;
