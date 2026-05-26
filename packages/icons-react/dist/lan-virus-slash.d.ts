import React from 'react';

export interface LanVirusSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVirusSlash: React.FC<LanVirusSlashProps>;
export default LanVirusSlash;
