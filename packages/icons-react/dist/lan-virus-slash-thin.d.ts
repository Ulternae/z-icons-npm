import React from 'react';

export interface LanVirusSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVirusSlashThin: React.FC<LanVirusSlashThinProps>;
export default LanVirusSlashThin;
