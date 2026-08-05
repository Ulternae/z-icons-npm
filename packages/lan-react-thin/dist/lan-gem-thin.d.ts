import React from 'react';

export interface LanGemThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGemThin(props: LanGemThinProps): React.ReactElement;
export default LanGemThin;
