import React from 'react';

export interface LanUserTieThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserTieThin(props: LanUserTieThinProps): React.ReactElement;
export default LanUserTieThin;
