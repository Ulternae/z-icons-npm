import React from 'react';

export interface CoreCloudProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCloud(props: CoreCloudProps): React.ReactElement;
export default CoreCloud;
