import React from 'react';

export interface BruInstalodProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruInstalod: React.FC<BruInstalodProps>;
export default BruInstalod;
