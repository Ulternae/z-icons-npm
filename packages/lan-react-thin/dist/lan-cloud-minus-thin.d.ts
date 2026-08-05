import React from 'react';

export interface LanCloudMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudMinusThin(props: LanCloudMinusThinProps): React.ReactElement;
export default LanCloudMinusThin;
