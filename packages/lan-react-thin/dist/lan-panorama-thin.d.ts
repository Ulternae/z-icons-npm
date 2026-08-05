import React from 'react';

export interface LanPanoramaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPanoramaThin(props: LanPanoramaThinProps): React.ReactElement;
export default LanPanoramaThin;
