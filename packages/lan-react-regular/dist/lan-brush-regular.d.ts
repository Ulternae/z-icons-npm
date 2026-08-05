import React from 'react';

export interface LanBrushRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrushRegular(props: LanBrushRegularProps): React.ReactElement;
export default LanBrushRegular;
