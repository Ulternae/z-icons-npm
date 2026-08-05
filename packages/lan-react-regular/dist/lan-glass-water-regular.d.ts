import React from 'react';

export interface LanGlassWaterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassWaterRegular(props: LanGlassWaterRegularProps): React.ReactElement;
export default LanGlassWaterRegular;
