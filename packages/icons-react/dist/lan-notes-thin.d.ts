import React from 'react';

export interface LanNotesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNotesThin: React.FC<LanNotesThinProps>;
export default LanNotesThin;
