import React from 'react';

export interface CoreCloudShowersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCloudShowers(props: CoreCloudShowersProps): React.ReactElement;
export default CoreCloudShowers;
