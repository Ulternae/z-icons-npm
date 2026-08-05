import React from 'react';

export interface LanCutleryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCutleryThin(props: LanCutleryThinProps): React.ReactElement;
export default LanCutleryThin;
