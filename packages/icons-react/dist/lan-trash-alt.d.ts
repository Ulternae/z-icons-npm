import React from 'react';

export interface LanTrashAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashAlt: React.FC<LanTrashAltProps>;
export default LanTrashAlt;
