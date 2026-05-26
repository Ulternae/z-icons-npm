import React from 'react';

export interface LanNotesMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNotesMedicalThin: React.FC<LanNotesMedicalThinProps>;
export default LanNotesMedicalThin;
