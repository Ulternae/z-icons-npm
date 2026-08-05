import React from 'react';

export interface LanBinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBin(props: LanBinProps): React.ReactElement;
export default LanBin;
