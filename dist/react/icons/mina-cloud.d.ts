import React from 'react';

export interface MinaCloudProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloud: React.FC<MinaCloudProps>;
export default MinaCloud;
