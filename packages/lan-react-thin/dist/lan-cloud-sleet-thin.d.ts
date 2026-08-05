import React from 'react';

export interface LanCloudSleetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudSleetThin(props: LanCloudSleetThinProps): React.ReactElement;
export default LanCloudSleetThin;
