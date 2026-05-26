import React from 'react';

export interface LanSlashBackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlashBack: React.FC<LanSlashBackProps>;
export default LanSlashBack;
