import React from 'react';

export interface LanNotesMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNotesMedicalSolid: React.FC<LanNotesMedicalSolidProps>;
export default LanNotesMedicalSolid;
