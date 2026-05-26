import React from 'react';

export interface LanNotesStickyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNotesStickyThin: React.FC<LanNotesStickyThinProps>;
export default LanNotesStickyThin;
