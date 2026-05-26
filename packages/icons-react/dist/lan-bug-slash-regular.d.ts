import React from 'react';

export interface LanBugSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBugSlashRegular: React.FC<LanBugSlashRegularProps>;
export default LanBugSlashRegular;
