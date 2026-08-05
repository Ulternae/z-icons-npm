import React from 'react';

export interface LanLThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLThin(props: LanLThinProps): React.ReactElement;
export default LanLThin;
