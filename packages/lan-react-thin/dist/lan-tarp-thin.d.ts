import React from 'react';

export interface LanTarpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTarpThin(props: LanTarpThinProps): React.ReactElement;
export default LanTarpThin;
