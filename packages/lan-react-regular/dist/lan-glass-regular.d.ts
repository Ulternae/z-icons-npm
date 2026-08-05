import React from 'react';

export interface LanGlassRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassRegular(props: LanGlassRegularProps): React.ReactElement;
export default LanGlassRegular;
