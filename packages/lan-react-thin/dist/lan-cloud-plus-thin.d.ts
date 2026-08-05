import React from 'react';

export interface LanCloudPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudPlusThin(props: LanCloudPlusThinProps): React.ReactElement;
export default LanCloudPlusThin;
