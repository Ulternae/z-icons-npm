import React from 'react';

export interface LanRedoAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRedoAlt: React.FC<LanRedoAltProps>;
export default LanRedoAlt;
