import React from 'react';

export interface LanYinYangThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanYinYangThin(props: LanYinYangThinProps): React.ReactElement;
export default LanYinYangThin;
