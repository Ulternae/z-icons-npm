import React from 'react';

export interface LanLemonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLemonThin(props: LanLemonThinProps): React.ReactElement;
export default LanLemonThin;
