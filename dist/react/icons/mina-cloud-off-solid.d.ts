import React from 'react';

export interface MinaCloudOffSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudOffSolid: React.FC<MinaCloudOffSolidProps>;
export default MinaCloudOffSolid;
