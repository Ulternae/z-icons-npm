import React from 'react';

export interface LanNoteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNote: React.FC<LanNoteProps>;
export default LanNote;
