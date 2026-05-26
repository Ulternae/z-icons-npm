import React from 'react';

export interface LanNotesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNotes: React.FC<LanNotesProps>;
export default LanNotes;
