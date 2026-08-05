import React from 'react';

export interface LanGlassEmptyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassEmptyRegular(props: LanGlassEmptyRegularProps): React.ReactElement;
export default LanGlassEmptyRegular;
