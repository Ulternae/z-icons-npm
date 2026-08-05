import React from 'react';

export interface LanBinRecycleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBinRecycleThin(props: LanBinRecycleThinProps): React.ReactElement;
export default LanBinRecycleThin;
