import React from 'react';

export interface NeoCloudSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCloudSolid: React.FC<NeoCloudSolidProps>;
export default NeoCloudSolid;
