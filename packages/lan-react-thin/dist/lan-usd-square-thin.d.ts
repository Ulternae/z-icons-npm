import React from 'react';

export interface LanUsdSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsdSquareThin(props: LanUsdSquareThinProps): React.ReactElement;
export default LanUsdSquareThin;
