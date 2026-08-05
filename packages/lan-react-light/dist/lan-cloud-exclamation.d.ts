import React from 'react';

export interface LanCloudExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudExclamation(props: LanCloudExclamationProps): React.ReactElement;
export default LanCloudExclamation;
