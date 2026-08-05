import React from 'react';

export interface LanNotesMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNotesMedical(props: LanNotesMedicalProps): React.ReactElement;
export default LanNotesMedical;
