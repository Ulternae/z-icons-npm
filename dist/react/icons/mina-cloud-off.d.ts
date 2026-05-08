import React from 'react';

export interface MinaCloudOffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudOff: React.FC<MinaCloudOffProps>;
export default MinaCloudOff;
