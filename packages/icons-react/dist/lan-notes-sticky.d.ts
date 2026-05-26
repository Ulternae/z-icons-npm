import React from 'react';

export interface LanNotesStickyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNotesSticky: React.FC<LanNotesStickyProps>;
export default LanNotesSticky;
