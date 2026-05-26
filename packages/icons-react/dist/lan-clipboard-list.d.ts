import React from 'react';

export interface LanClipboardListProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardList: React.FC<LanClipboardListProps>;
export default LanClipboardList;
