import React from 'react';

export interface LanAlignSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlignSlashRegular: React.FC<LanAlignSlashRegularProps>;
export default LanAlignSlashRegular;
