import React from 'react';

export interface LanCloudProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloud(props: LanCloudProps): React.ReactElement;
export default LanCloud;
