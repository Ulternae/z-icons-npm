import React from 'react';

export interface MinaCloudProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloud(props: MinaCloudProps): React.ReactElement;
export default MinaCloud;
