import React from 'react';

export interface LanSlashForwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlashForward: React.FC<LanSlashForwardProps>;
export default LanSlashForward;
