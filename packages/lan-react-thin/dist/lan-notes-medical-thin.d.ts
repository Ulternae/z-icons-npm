import React from 'react';

export interface LanNotesMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNotesMedicalThin(props: LanNotesMedicalThinProps): React.ReactElement;
export default LanNotesMedicalThin;
