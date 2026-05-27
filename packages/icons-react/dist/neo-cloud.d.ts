import React from 'react';

export interface NeoCloudProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCloud: React.FC<NeoCloudProps>;
export default NeoCloud;
