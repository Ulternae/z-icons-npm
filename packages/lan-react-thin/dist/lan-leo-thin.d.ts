import React from 'react';

export interface LanLeoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLeoThin(props: LanLeoThinProps): React.ReactElement;
export default LanLeoThin;
