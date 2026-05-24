import React from 'react';

export interface BruMixcloudProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruMixcloud: React.FC<BruMixcloudProps>;
export default BruMixcloud;
