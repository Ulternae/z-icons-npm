import React from 'react';

export interface LanNotesMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNotesMedicalSolid(props: LanNotesMedicalSolidProps): React.ReactElement;
export default LanNotesMedicalSolid;
