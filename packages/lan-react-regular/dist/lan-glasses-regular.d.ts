import React from 'react';

export interface LanGlassesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassesRegular(props: LanGlassesRegularProps): React.ReactElement;
export default LanGlassesRegular;
