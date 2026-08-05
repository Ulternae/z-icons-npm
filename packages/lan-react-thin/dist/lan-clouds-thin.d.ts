import React from 'react';

export interface LanCloudsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudsThin(props: LanCloudsThinProps): React.ReactElement;
export default LanCloudsThin;
