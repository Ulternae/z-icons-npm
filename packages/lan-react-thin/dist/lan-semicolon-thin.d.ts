import React from 'react';

export interface LanSemicolonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSemicolonThin(props: LanSemicolonThinProps): React.ReactElement;
export default LanSemicolonThin;
