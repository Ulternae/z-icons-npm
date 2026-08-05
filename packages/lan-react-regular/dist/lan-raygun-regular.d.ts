import React from 'react';

export interface LanRaygunRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRaygunRegular(props: LanRaygunRegularProps): React.ReactElement;
export default LanRaygunRegular;
