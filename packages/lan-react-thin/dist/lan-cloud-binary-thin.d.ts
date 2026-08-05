import React from 'react';

export interface LanCloudBinaryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudBinaryThin(props: LanCloudBinaryThinProps): React.ReactElement;
export default LanCloudBinaryThin;
