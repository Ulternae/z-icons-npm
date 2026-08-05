import React from 'react';

export interface LanPineappleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPineappleThin(props: LanPineappleThinProps): React.ReactElement;
export default LanPineappleThin;
