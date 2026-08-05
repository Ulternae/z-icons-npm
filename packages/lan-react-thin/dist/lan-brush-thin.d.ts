import React from 'react';

export interface LanBrushThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrushThin(props: LanBrushThinProps): React.ReactElement;
export default LanBrushThin;
