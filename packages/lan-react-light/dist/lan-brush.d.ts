import React from 'react';

export interface LanBrushProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrush(props: LanBrushProps): React.ReactElement;
export default LanBrush;
