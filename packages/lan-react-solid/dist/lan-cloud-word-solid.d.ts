import React from 'react';

export interface LanCloudWordSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudWordSolid(props: LanCloudWordSolidProps): React.ReactElement;
export default LanCloudWordSolid;
