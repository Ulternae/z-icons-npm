import React from 'react';

export interface LanBookmarkSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookmarkSlashRegular: React.FC<LanBookmarkSlashRegularProps>;
export default LanBookmarkSlashRegular;
