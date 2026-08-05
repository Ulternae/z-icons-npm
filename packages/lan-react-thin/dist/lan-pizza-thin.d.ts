import React from 'react';

export interface LanPizzaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPizzaThin(props: LanPizzaThinProps): React.ReactElement;
export default LanPizzaThin;
