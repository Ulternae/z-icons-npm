import React from 'react';

export interface LanBraThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBraThin(props: LanBraThinProps): React.ReactElement;
export default LanBraThin;
