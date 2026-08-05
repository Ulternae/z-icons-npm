import React from 'react';

export interface MinaCloudSnowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudSnow(props: MinaCloudSnowProps): React.ReactElement;
export default MinaCloudSnow;
