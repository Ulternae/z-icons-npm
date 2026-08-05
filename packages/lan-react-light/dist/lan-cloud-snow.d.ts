import React from 'react';

export interface LanCloudSnowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudSnow(props: LanCloudSnowProps): React.ReactElement;
export default LanCloudSnow;
