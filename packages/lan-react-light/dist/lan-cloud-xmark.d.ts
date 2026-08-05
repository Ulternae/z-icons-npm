import React from 'react';

export interface LanCloudXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudXmark(props: LanCloudXmarkProps): React.ReactElement;
export default LanCloudXmark;
