import React from 'react';

export interface LanFaceGlassesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceGlassesRegular(props: LanFaceGlassesRegularProps): React.ReactElement;
export default LanFaceGlassesRegular;
