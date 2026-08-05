import React from 'react';

export interface LanBinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBinThin(props: LanBinThinProps): React.ReactElement;
export default LanBinThin;
