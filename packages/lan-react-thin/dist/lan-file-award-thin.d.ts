import React from 'react';

export interface LanFileAwardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileAwardThin(props: LanFileAwardThinProps): React.ReactElement;
export default LanFileAwardThin;
