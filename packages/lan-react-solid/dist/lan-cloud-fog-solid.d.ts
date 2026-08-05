import React from 'react';

export interface LanCloudFogSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudFogSolid(props: LanCloudFogSolidProps): React.ReactElement;
export default LanCloudFogSolid;
