import React from 'react';

export interface LanNotesMedicalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNotesMedicalRegular(props: LanNotesMedicalRegularProps): React.ReactElement;
export default LanNotesMedicalRegular;
