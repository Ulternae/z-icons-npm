import React from 'react';

export interface CoreCloudSnowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCloudSnow(props: CoreCloudSnowProps): React.ReactElement;
export default CoreCloudSnow;
