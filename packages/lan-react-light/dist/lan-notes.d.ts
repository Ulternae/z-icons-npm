import React from 'react';

export interface LanNotesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNotes(props: LanNotesProps): React.ReactElement;
export default LanNotes;
