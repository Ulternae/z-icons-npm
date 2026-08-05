import React from 'react';

export interface LanCloudBinaryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudBinary(props: LanCloudBinaryProps): React.ReactElement;
export default LanCloudBinary;
