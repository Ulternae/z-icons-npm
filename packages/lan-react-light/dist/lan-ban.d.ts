import React from 'react';

export interface LanBanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBan(props: LanBanProps): React.ReactElement;
export default LanBan;
