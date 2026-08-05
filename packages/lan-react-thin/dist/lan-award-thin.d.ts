import React from 'react';

export interface LanAwardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAwardThin(props: LanAwardThinProps): React.ReactElement;
export default LanAwardThin;
