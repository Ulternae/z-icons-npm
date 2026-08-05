import React from 'react';

export interface LanCloudShowersThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudShowersThin(props: LanCloudShowersThinProps): React.ReactElement;
export default LanCloudShowersThin;
