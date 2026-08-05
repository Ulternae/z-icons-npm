import React from 'react';

export interface LanCookieThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCookieThin(props: LanCookieThinProps): React.ReactElement;
export default LanCookieThin;
