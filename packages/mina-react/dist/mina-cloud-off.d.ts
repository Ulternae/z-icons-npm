import React from 'react';

export interface MinaCloudOffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudOff(props: MinaCloudOffProps): React.ReactElement;
export default MinaCloudOff;
