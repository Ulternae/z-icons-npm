import React from 'react';

export interface LanFaceCloudsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceCloudsThin(props: LanFaceCloudsThinProps): React.ReactElement;
export default LanFaceCloudsThin;
