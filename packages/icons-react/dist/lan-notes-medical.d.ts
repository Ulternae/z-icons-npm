import React from 'react';

export interface LanNotesMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNotesMedical: React.FC<LanNotesMedicalProps>;
export default LanNotesMedical;
