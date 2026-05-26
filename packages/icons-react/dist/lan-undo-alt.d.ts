import React from 'react';

export interface LanUndoAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUndoAlt: React.FC<LanUndoAltProps>;
export default LanUndoAlt;
