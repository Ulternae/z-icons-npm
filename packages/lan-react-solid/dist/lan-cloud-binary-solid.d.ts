import React from 'react';

export interface LanCloudBinarySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudBinarySolid(props: LanCloudBinarySolidProps): React.ReactElement;
export default LanCloudBinarySolid;
