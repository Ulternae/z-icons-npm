import React from 'react';

export interface LanFolderMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderMinusThin: React.FC<LanFolderMinusThinProps>;
export default LanFolderMinusThin;
