import React from 'react';

export interface LanCloudSleetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudSleetSolid(props: LanCloudSleetSolidProps): React.ReactElement;
export default LanCloudSleetSolid;
