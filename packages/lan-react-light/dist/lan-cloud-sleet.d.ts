import React from 'react';

export interface LanCloudSleetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudSleet(props: LanCloudSleetProps): React.ReactElement;
export default LanCloudSleet;
