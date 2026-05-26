import React from 'react';

export interface LanNotesMedicalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNotesMedicalRegular: React.FC<LanNotesMedicalRegularProps>;
export default LanNotesMedicalRegular;
