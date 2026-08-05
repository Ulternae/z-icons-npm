import React from 'react';

export interface LanThumbTackThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThumbTackThin(props: LanThumbTackThinProps): React.ReactElement;
export default LanThumbTackThin;
