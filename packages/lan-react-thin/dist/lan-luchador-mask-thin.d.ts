import React from 'react';

export interface LanLuchadorMaskThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLuchadorMaskThin(props: LanLuchadorMaskThinProps): React.ReactElement;
export default LanLuchadorMaskThin;
