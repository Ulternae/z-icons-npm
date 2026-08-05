import React from 'react';

export interface LanNotesStickyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNotesSticky(props: LanNotesStickyProps): React.ReactElement;
export default LanNotesSticky;
