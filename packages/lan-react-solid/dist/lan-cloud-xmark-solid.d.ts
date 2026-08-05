import React from 'react';

export interface LanCloudXmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudXmarkSolid(props: LanCloudXmarkSolidProps): React.ReactElement;
export default LanCloudXmarkSolid;
