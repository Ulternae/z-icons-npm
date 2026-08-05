import React from 'react';

export interface LanSoftServeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSoftServeSolid(props: LanSoftServeSolidProps): React.ReactElement;
export default LanSoftServeSolid;
