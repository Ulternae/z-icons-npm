import React from 'react';

export interface LanFaceCloudsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceCloudsSolid(props: LanFaceCloudsSolidProps): React.ReactElement;
export default LanFaceCloudsSolid;
