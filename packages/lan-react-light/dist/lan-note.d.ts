import React from 'react';

export interface LanNoteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNote(props: LanNoteProps): React.ReactElement;
export default LanNote;
