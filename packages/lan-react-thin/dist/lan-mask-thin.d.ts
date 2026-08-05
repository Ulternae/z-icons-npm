import React from 'react';

export interface LanMaskThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMaskThin(props: LanMaskThinProps): React.ReactElement;
export default LanMaskThin;
