import React from 'react';

export interface LanCurlingStoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCurlingStoneSolid(props: LanCurlingStoneSolidProps): React.ReactElement;
export default LanCurlingStoneSolid;
